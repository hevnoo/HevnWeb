<template>
    <div class="wrapper">
        <div class="content">
            <el-form :model="form" ref="form" label-width="80px">
                <el-form-item label="昵称：">
                    <el-input v-model="form.nickname" class="nickname"></el-input>
                </el-form-item>
                <el-form-item label="头像：">
                    <el-upload
                        class="avatar-uploader"
                        action="http://127.0.0.1:3000/api/user/upload"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        name="head_img">
                        <img v-lazy="imageUrl!=null?imageUrl:imgDefault" class="avatar">
                    </el-upload>
                    <p class="tips">tips:请上传2M以内JPG/PNG格式的图片，比例最好1:1</p>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="save()">保存</el-button>
                    <el-button @click="signOut()">退出登录</el-button>
                </el-form-item>
            </el-form>
            
        </div>
    </div>
</template>

<script>
    import imgDefault from '@/assets/logo.jpg'
    import Cookie from 'js-cookie'

    export default {
        name:'Personal',
        data() {
            return {
                form: {
                    nickname: this.nickname
                },
                imageUrl: null,
                imgDefault: imgDefault,
                
            }
        },
        methods: {
            //
            upUserList(){
                this.$axios.post('/api/userList/upUserList',{
                    nickname: this.form.nickname,
                    head_img: this.imageUrl
                })
            },
            // 更新用户信息
            save() {
                this.$axios.post('/api/user/updateUser', {
                    nickname: this.form.nickname,
                    head_img: this.imageUrl
                }).then(res => {
                    this.upUserList();
                    if (res.data.code === 0) {
                        this.$message({
                            message: '更新成功',
                            type: 'success'
                        });
                        setTimeout(() => {
                            location.reload()
                        }, 800)
                    }
                }).catch(e => {
                    console.log(e)
                })
            },
            handleAvatarSuccess(res) {
                this.imageUrl = res.data
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            // 获取用户信息
            getUserInfo() {
                this.$axios.get('/api/user/info').then((res) => {
                    let result = res.data
                    if (result.code === 0) {
                        this.form.nickname = result.data.nickname
                        if (result.data.head_img === '' || result.data.head_img === null) {
                            this.imageUrl = null
                            // this.imggeUrl = '../assets/img/head_img.jpg'
                        } else {
                            this.imageUrl = result.data.head_img
                        }
                    }
                }).catch(e => {
                    console.log(e)
                })
            },
            // 退出登录按钮
            signOut() {
                Cookie.remove('token')
                // this.$store.commit('token/setToken', '')
                // this.$store.commit('token/changIsSignIn', 0)
                this.$store.commit('tokens/SETTOKEN', '')
                this.$store.commit('tokens/ISSIGNIN', 0)
                this.$router.push({
                    name: 'home'
                })
            }
        },
        created() {
            this.getUserInfo()
        }

    }
</script>

<style lang="scss" scoped>
    .wrapper {
        // min-height: calc(100vh - 200px);
        min-height: 100vh;
        color: #e6e6ea;
        .content {
            // width: 40%;
            width: 480px;
            height: 380px;
            margin: 60px auto auto auto;
            padding: 50px 0;
            border-radius: 10px;
            backdrop-filter: blur(50px);
        }
    }
    ::v-deep .el-form-item__label{
        color: rgba(250, 250, 250, 1) !important;
    }
    .nickname {
        width: 70%;
    }
    
    .avatar-uploader {
        .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
            &:hover {
                border-color: #409EFF;
            }
        }
        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 100px;
            height: 100px;
            line-height: 100px;
            text-align: center;
        }
        .avatar {
            width: 100px;
            height: 100px;
            display: block;
        }
    }
    
    .tips {
        font-size: 12px;
        color: #e6e6ea;
    }
</style>