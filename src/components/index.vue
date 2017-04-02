<template>
<div>
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">cardview（卡片视图）{{s}}</h1>
		</header>
		<div class="mui-content">
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<router-link to="/hello">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
						</router-link>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header">页眉{{s}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../assets/common/images/cbd.jpg)"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>Posted on January 18, 2016</p>
						<p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Read more</a>
				</div>
			</div>

			
			<div class="mui-card">
				<div class="mui-card-header mui-card-media">
					<img src="../assets/common/images/logo.png" />
					<div class="mui-media-body">
						小M
						<p>发表于 2016-06-30 15:30</p>
					</div>
					<!--<img class="mui-pull-left" src="../assets/common/images/logo.png" width="34px" height="34px" />
					<h2>小M</h2>
					<p>发表于 2016-06-30 15:30</p>-->
				</div>
				<div class="mui-card-content" >
					<img src="../assets/common/images/yuantiao.jpg" alt="" width="100%"/>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">Like</a>
					<a class="mui-card-link">Comment</a>
					<a class="mui-card-link">Read more</a>
				</div>
			</div>
		</div>
		<v-nav></v-nav>
</div>
 
</template>
<script>
import nav from  '@/components/tabbar'
import axios from 'axios'
import api from '../static/api'
   export default{
   	name:'name',
   	data(){
   		return {
	 		s:{}
	 		}
   	},
   	methods: { 
       getInfo:function(){
       	var th=this;
       	 axios.get(this.baseUrl+'test')
		  .then(function (response) {
		   th.s=response.data;
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
         /*alert(this.$route.params.id);   */
       }
   	},
   	 created: function () { 
       this.getInfo();
       },
   	 components: {
     'v-nav':nav
  }
   }
</script>
<style>
</style>