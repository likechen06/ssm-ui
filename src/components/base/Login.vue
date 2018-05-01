<template>
  <div class="" v-loading.fullscreen=loading>
   <el-row>
    <el-form :model="user" autoComplete="on" status-icon :rules="loginRules" ref="user" label-width="100px" class="demo-ruleForm" label-position="left">
      <el-form-item label="密码" prop="name" autoComplete="on" :error="errorMsg">
    <el-input  v-model="user.name" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pwd"  :error="errorMsg">
    <el-input type="password" v-model="user.pwd" auto-complete="on"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('user')">提交</el-button>
    <el-button @click="resetForm('user')">重置</el-button>
  </el-form-item>
</el-form>
   </el-row>
  </div>
</template>

<script>
import { isvalidUsername } from '@/common/utils/validateUtil'
import Ajax from 'http'
export default {
  name: 'HelloWorld',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      user: {
        name: 'admin',
        pwd: 'asdasda'
      },
      errorMsg: '',
      loginRules: {
        name: [{ required: true, trigger: 'blur', validator: validateUsername }],
        pwd: [{ required: true, trigger: 'blur', validator: validatePassword }]
      }
    }
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.errorMsg = ''
          this.loading = true
          console.log(Ajax.post)
          Ajax.post('xxx/xxx', this.user)
            .then((res) => {
              this.loading = false
              if (res.name === 'admin' && res.pwd === 'asdasda') {
                this.$router.push({ path: '/home' })
              } else {
                this.errorMsg = '用户名或密码错误!请重新输入'
              }
            }).catch(() => {
              this.loading = false
            })
        } else {
          console.log('表单验证失败')
          return false
        }
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
