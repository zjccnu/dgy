<template>
			<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/customList">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">{{s.custom}}</span>
			</router-link>
			<router-link class="mui-tab-item" to="/approval">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">1</span></span>
				<span class="mui-tab-label">{{s.goods}}</span>
			</router-link>
			<router-link class="mui-tab-item" to="/approval">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">{{s.approval}}</span>
			</router-link>
			<router-link class="mui-tab-item" to="/mine">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">{{s.mine}}</span>
			</router-link>
		</nav>
</template>
<script>
	 export default{
	 	data(){
	 		return {
	 			s:{
	 				custom:'客户',
	 				goods:'工单',
	 	            approval:'审批',
	 	            mine:'我的'
	 			}
	 		}
	 	},
	 	methods:{
               
	 	}
	 }
</script>
<style> 
</style>