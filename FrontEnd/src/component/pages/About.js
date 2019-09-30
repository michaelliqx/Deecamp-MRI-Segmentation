import React from 'react';
import deecampimg from "../../imgs/deecampimg.png"
import './About.css'
export default () => {
	return (
		<div>
			<h2 className = "display-4">
			<span className = "text-warning">
			About</span> 
			Deecamp </h2>
			<div className='chuangxin'>
			{/* <img src = {deecampimg}  className = "deecampimg"/> */}
			</div>
			<center>
			<p className = 'text-secondary'>
			2019.7.19-8.17</p>
			<div className='deecampintro'>
				<div className='container-fluid'>
					<div className='row'>
						<div class="col-sm-6" >
					DeeCamp 训练营由创新工场于2017年发起，旨在提升高校AI人才在行业应用中的实践案例经验，同时推进产学研深度结合。2018年 DeeCamp 被教育部选中作为“中国高校人工智能人才国际培养计划”两个组成部分之一的学生培训营。到2019年，DeeCamp 人工智能训练营已初步建立了以创造性的团队工程实践项目为主干，以打通学术、产业边界的系统性知识培训为支撑，聚焦未来科技变革与商业发展，成规模、可复制的人工智能应用型人才培养体系。 
						</div>
						<div class="col-sm-6"  >
					DeeCamp的名字来自历史上由O' Reilly组织的Foo Camp（一个完全由与会者设计流程、议题、内容的unconference）。DeeCamp用类似的命名方式，希望建立一个为学生服务、充分发挥学生自主精神的Deep Learning Summer Camp，既有统一的课程和项目安排，也借鉴unconference，放手让学生自我组织、自我管理、自我表现。
					在2018年度训练营期间，学员们在顺利完成课程和实践的同时，自行组织了3次技术分享会、12个技术分享，以及近20个兴趣小组。今年，最棒的DeeCamp 2019等你来一起实现！
					</div>
					</div>
				</div>
			</div>
			<div className='tolink'>
			<a href='https://deecamp.chuangxin.com/?channel=0#app'>点击这里查看更多DeeCamp详情</a>
			</div>
			</center>

		</div>
	)
}