<template>
  <div class="header">
  	<div class="content-warpper">
  		<div class="avatar">
  			<img :src="sellers.avatar" width="64" height="64">
  		</div>
  		<div class="content">
  			<div class="title">
  				<span class="brand"></span>
  				<span class="name">{{sellers.name}}</span>
  			</div>
  			<div class="description">
  				{{sellers.description}}/{{sellers.deliveryTime}}分钟到达
  			</div>
  			<div v-if="sellers.supports" class="support">
  				<span class="icon"></span>
  				<span class="text">{{sellers.supports[0].description}}</span>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
  export default {
  	props: {
  		sellers: {
  			type: Object
  		}
  	}
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
	@import '../../stylus/mixin.styl'
	.header
		color: #fff
		background: #000
		.content-warpper 
			padding: 24px 12px 18px 24px 
			font-size: 0
			.avatar 
				display: inline-block
			.content
				display: inline-block
				font-size: 14px
				margin-left: 16px
				.title
					margin: 2px 0 8px 0
					.brand 
						display: inline-block
						vertical-align: top
						width: 30px
						height: 18px
						bg-image('brand')
						background-size: 30px 18px
						background-repeat: no-repeat
					.name
						margin-left: 6px
						font-size: 16px
						line-height: 18px 
						font-weight: bold
</style>
