<template>
<div>
	   <div class="mui-bar mui-bar-tab" style="height:20px;line-height:20px;font-size:10px;text-align:center;">    
            这是底部信息    
       </div>    
    <div class="mui-content-padded" style="margin:5px;">    
      <form class="mui-input-group">    
        <div class="mui-input-row">    
            <label>用户名</label>    
            <input type="text" id="username" placeholder="用户名" v-model="s.username" />    
        </div>    
        <div class="mui-input-row">    
            <label>密码</label>    
            <input type="password" id="userpassword" placeholder="密码" v-model="s.userpassword"/>    
        </div>    
     </form>    
    </div>    
    <div style="margin-top:20px;text-align:center;">    
        <button class="mui-btn mui-btn-primary" id="loginBtn" @click="login()">登录</button>    
        &nbsp;&nbsp;<button class="mui-btn mui-btn-primary" id="regBtn">注册</button>  
    </div> 
    </div>   
</template>
<script>
	export default({
        data(){
            return {
                s:{
                 username:'',
                 userpassword:''
                }
            }
        },
        methods:{
            login:function(){
                if(this.s.username=="zhou"&&this.s.userpassword=="123456"){
                    this.$router.push('customList')
                }
                else{
                    alert("用户名或密码错误")
                }
            }
        }
    })
</script>
<style>
	
</style>