<template>
	 <div>
		<header id="header" class="mui-bar mui-bar-transparent">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">导航栏</h1>
			<a class="mui-action-back mui-icon mui-icon-right-nav mui-pull-right">123</a>
		</header>
 
		 <div class="mui-content">

			<img id="img1"  src="../assets/common/images/bg.png"  style="margin:30px 15px 20px;" />
		</div>
			
		<div class="mui-content">
			<div style="padding: 10px 10px;">
				<div id="segmentedControl" class="mui-segmented-control mui-segmented-control-inverted mui-segmented-control-negative">
					<a class="mui-control-item mui-active" href="#item1">基本信息</a>
					<a class="mui-control-item" href="#item2">工作计划</a>
					<a class="mui-control-item" href="#item3">日程记录</a>
				</div>
			</div>
		</div>
				<div id="item1" class="mui-control-content mui-active">
					<div id="scroll" class="mui-scroll-wrapper">
						<div class="mui-scroll">
							<ul class="mui-table-view">
								<li class="mui-table-view-cell">
									名称
								</li>
								<li class="mui-table-view-cell">
									狒狒
								</li>
								<li class="mui-table-view-cell">
									分类
								</li>
								<li class="mui-table-view-cell">
									A级
								</li>
								<li class="mui-table-view-cell">
									地址
								</li>
								<li class="mui-table-view-cell">
									aaa
								</li>
								<li class="mui-table-view-cell">
									地图定位
								</li>
								<li class="mui-table-view-cell">
									aaa
								</li>
								<li class="mui-table-view-cell">
									联系人
								</li>
								<li class="mui-table-view-cell">
									跟进人 <img src="../assets/common/images/HBuilder.png" style="width: 20px;height: 20px;"/>
								</li>
								
								
							</ul>
						</div>
					</div>
				</div>
				<div id="item2" class="mui-control-content">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell">
							第二个选项卡子项-1
						</li>
						<li class="mui-table-view-cell">
							第二个选项卡子项-2
						</li>
						<li class="mui-table-view-cell">
							第二个选项卡子项-3
						</li>
					</ul>
				</div>
				<div id="item3" class="mui-control-content">
					<ul class="mui-table-view">
						<li class="mui-table-view-cell">
							第三个选项卡子项-1
						</li>
						<li class="mui-table-view-cell">
							第三个选项卡子项-2
						</li>
						<li class="mui-table-view-cell">
							第三个选项卡子项-3
						</li>
					</ul>
				</div>
			<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#" >
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">跟进记录</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat" @click="visit()">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">开始拜访</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">新增日程</span>
			</a>
		</nav>
	</div>
</template>
<script>
	export default({
		data(){
			return {
				s:{}
			}
		},
		created(){
			this.$nextTick(function(){
				this.initDom();
			})
		},
		methods:{
			follow:function(){
              this.$router.push("followCustom");
			},
			visit:function(){
               this.$router.push("");
			},
			initDom:function(){
				mui.init({
				swipeBack: true //启用右滑关闭功能
			   });
			(function($) {
				$('#scroll').scroll({
					indicators: true //是否显示滚动条
				});
				var segmentedControl = document.getElementById('segmentedControl');
				$('.mui-input-group').on('change', 'input', function() {
					if (this.checked) {
						var styleEl = document.querySelector('input[name="style"]:checked');
						var colorEl = document.querySelector('input[name="color"]:checked');
						if (styleEl && colorEl) {
							var style = styleEl.value;
							var color = colorEl.value;
							segmentedControl.className = 'mui-segmented-control' + (style ? (' mui-segmented-control-' + style) : '') + ' mui-segmented-control-' + color;
						}
					}
				});
			})(mui);
			}
		}
	})
</script>
<style>
		.mui-card .mui-control-content {
				padding: 10px;
			}
			
			.mui-control-content {
				height: 200px;
			}
			
			.mui-table-view-cell{font-size: 16px;}
</style>