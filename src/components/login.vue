<template>
    <div>
	  <div style="width: 100%;margin: 0;color: red; text-align:right;">
          <a>更多</a>
    </div>
    <div style="margin: 0;padding: 0;">
      <ul style="margin: 0;padding: 0;overflow: auto;">
        <li style="list-style:none;text-align: center;"><img src="../assets/common/images/my.png" style="width: 65px;height: 65px;"></li>
        <li style="list-style:none;text-align: center;"><a>王简</a></li>
            
      </ul>
            
          <div class="mui-input-row mui-password" style="margin-top: 20px;">
            <input type="password" class="mui-input-password"placeholder="密码" style="width: 100%;height: 30px;" name="empPassword">
          </div>
        <div class="xiayibu" style="margin-top: 30px;" @click="login()">
          <p style="height: 23px;line-height: 23px;text-align: center;font-size: 18px;color: white;margin: 0;">登录</p>
        </div>  
        
        <div style="padding: 0;margin: 0;text-align: center;width: 100%;">
          <p style="height: 23px;line-height: 23px;text-align: center;font-size: 18px;color: #FF5050;margin: 0;">
          使用验证码登录
          </p>
        </div>
        
        <div style="height: 200px;width: 100%;"></div>
        
        <div style="padding: 0;margin: 0;text-align: center;width: 100%;overflow: auto;">
          <div style="width: 38%;height: 1px;background-color: #787878;float: left;margin-top: 11px;"></div>
          <!--<hr style="float: left;height: 1px;width: 38%;">-->
          <p style="float: left;width: 24%;height: 23px;line-height: 23px;text-align: center;font-size: 18px;color: #787878;margin: 0;"  >快速登录</p>
          <!--<hr style="float: left;height: 1px;width: 38%;">-->
          <div style="float: left;width: 38%;height: 1px;background-color: #787878;margin-top: 11px;"></div>
          
        </div>
        
        <ul>
          <li style="list-style:none;float: left;width: 50%;"><img src="../assets/common/images/my.png" style="width: 50px;height: 50px;right: 30px;" ></li>
          <li style="list-style:none;float: left;width: 50%;"><img src="../assets/common/images/my.png" style="width: 50px;height: 50px;left: 30px;" ></li>
        </ul>
    </div> 
    </div>  
</template>
<script>
    import {API} from '../static/api.js'
    import axios from 'axios'
	  export default({
        data(){
            return {
                s:{
                 empName:'',
                 empPassword:''
                }
            }
        },
        methods:{
            login:function(){
               this.$router.push('customList')
            },
           resigster:function(){
            var formData=new FormData($("#employee").val());
            var config={
              headers:{'Content-Type':'multipart/form-data'}
            };
              axios.post(API.resigster,
                  formData,
                  config
                )
                .then(function (response) {
                  alert(123)
                 alert(response.data);
                })
                .catch(function (error) {
                  console.log(error);
                });
              }
          }
    })
</script>
<style>
    	 ul{
        margin: 0;padding: 0;overflow: auto;
       }
      .xiayibu{width: 98%;margin-left: 1%;margin-bottom: 8px;padding: 10px 0;height: 23px;background-size: 100% 1px;background-color: #FF5050;border-radius: 5px;clear: both;}
</style>