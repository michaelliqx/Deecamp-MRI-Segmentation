import React, {
	Component
} from 'react';
import Contact from './Contact';
import {
	connect
} from 'react-redux';
import PropTypes from 'prop-types';
import {
	getContacts
} from '../../actions/contactActions';
import dog1 from "../../imgs/dog1.jpg"
import dog2 from "../../imgs/dog2.jpeg"
import dog3 from "../../imgs/dog3.jpeg"
import kongya from '../../imgs/kongya.png'
import yuanzhe from '../../imgs/yuanzhe.png'
import yanbai from '../../imgs/yanbai.jpg'
import zhiming from '../../imgs/zhiming.jpeg'
import songtao from '../../imgs/songtao.jpg'
import kaixiang from '../../imgs/kaixiang.jpeg'
import yuanfang from '../../imgs/yuanfang.jpeg'
import jiequn from '../../imgs/jiequn.jpeg'
import qingxing from '../../imgs/qingxing.jpeg'
import liangyu from '../../imgs/liangyu.jpg'
import './Contacts.css'

class Contacts extends Component {


	componentDidMount() {
		this.props.getContacts();
	}

	render() {
		const {
			contacts
		} = this.props;
		return (
			<React.Fragment>
				<h1 className = 'display-4 mb-2'>
					<span className = 'text-warning'>
					Contact
					</span> List
				</h1>
				<div className='container-fluid'>
					<div className='row' id = 'name'>
						<div className='col-3' id='namelist'>
							<img  src={qingxing} width='70%'/>
							<div className='name'>李青星</div>
							<div>波士顿大学</div>
							<div>lqx1996@bu.edu</div>
							<div>13341334793</div>
							<div>就读于美国波士顿大学电子与计算机工程专业，研究方向为机器学习与深度学习相关知识，有图像识别，语义分割，NLP等相关项目经验，在本项目中负责2.5D模型搭建以及前端网页搭建与可视化</div>
						</div>
						<div className='col-3' id='namelist'>
							<img  src={yanbai} width='70%'/>
							<div className='name'>何炎柏</div>
							<div>南京邮电大学</div>
							<div>heyanbai1999@gmail.com</div>
							<div>18851075337</div>
							<div>南京邮电大学计算机科学与技术专业大二学生。感兴趣领域：计算机视觉，机器学习。在该项目中主要负责数据偏置矫正，肿瘤三维重建，小程序搭建。</div>
						</div>
						<div className='col-3' id='namelist'>
							<img  src={kongya} width='70%' />
							<div className='name'>赵孔亚</div>
							<div>清华大学</div>
							<div>zhaoky15@mails.tsinghua.edu.cn</div>
							<div>18811328196</div>
							<div>清华大学航天航空学院2015级直博生，曾任清华大学航天航空学院研究生会常务副主席，研究方向为基于人工智能和显微形态学的若干疾病诊断方法研究，在本次项目中主要负责3D图像分割模型和生存预测模型的设计。</div>
						</div>
						<div className='col-3' id='namelist'>
							<img  src={yuanzhe} width='70%' />
							<div className='name'>柳元喆</div>
							<div>墨尔本大学</div>
							<div>yuanzhel@student.unimelb.edu.au</div>
							<div>+61451801776</div>
							<div>参与数据处理，影像组学特征提取及生存预测。掌握基本统计学习与深度学习知识，对机器学习，计算机视觉与时间序列在医学影像方面的应用具有浓厚兴趣。主要关注点为结构MRI，功能MRI，PETCT以及CT相关方面的研究。</div>
						</div>
					</div>

					<div className='row' id = 'name'>
						<div className='col-3' id='namelist'>
							<img  src={zhiming} width='70%'/>
							<div className='name'>郝智明</div>
							<div>中国科学院大学</div>
							<div>haozhiming18@mails.ucas.ac.cn</div>
							<div>15580186859</div>
							<div>参加第十一届全国大学生“恩智浦”杯智能车竞赛，获全国一等奖。曾在中国科学院大学光学成像与智能视觉实验室实习，负责校企合作项目——焊缝自动检测装置的研发，负责图像处理算法的设计与实现。在本课题中负责2.5D模型的搭建与调优。</div>
						</div>
						<div className='col-3' id='namelist'>
							<img  src={songtao} width='70%'/>
							<div className='name'>宋涛</div>
							<div>北京交通大学</div>
							<div>17120266@bjtu.edu.cn</div>
							<div>18813096445</div>
							<div>北京交通大学自动控制专业，从硬件底层摸爬滚打到了软件上层，努力做好一名“攻城狮”。本次项目中主要做的是数据的统计和生存预测的分析。</div>
						</div>
						<div className='col-3' id='namelist'>
							<img  src={kaixiang} width='70%' />
							<div className='name'>林楷翔</div>
							<div>北京邮电大学</div>
							<div>kxiang0120@163.com</div>
							<div>18810622757</div>
							<div>熟悉 Python、C++以及常用算法与数据结构， 计算机功底扎实；熟悉常用机器学习算法，NLP，CV基础算法；熟悉常用深度学习框架如TensorFlow、PyTorch的使用。本次课题中主要负责3D模型的搭建与调优</div>
						</div>
						<div className='col-3' id='namelist'>
							<img  src={yuanfang} width='70%' />
							<div className='name'>乔垣方</div>
							<div>华南理工大学</div>
							<div>qyyyyyf@163.com</div>
							<div>13416353719</div>
							<div>毕业于华南理工大学，即将研一，医学图像处理方向。熟悉图像分割方法及相关CNN模型，参与过超声、mri及ct的图像分割的工作。在本项目中主要负责影像数据预处理及2.5D图像分割模型的搭建和训练。</div>
						</div>
					</div>


					<div className='row' id = 'name'>
						<div className='col-3' id='namelist'>
							<img  src={jiequn} width='70%'/>
							<div className='name'>徐洁群</div>
							<div>大连理工大学</div>
							<div>jiequnxu@qq.com</div>
							<div>18742030961</div>
							<div>一个努力成为牛逼哄哄的设计师的人</div>
							<div>本科2019届大连理工大学工业设计系毕业生，成绩排名前5%。即将赴英国伦敦艺术大学攻读交互设计专业硕士。
							会做logo，做名片，做网页，做app，做产品（电子产品，家具，交通工具，玩具，纪念品等）。日常缺钱，甲方爸爸们有活请尽情向我砸来哈哈哈哈哈。</div>
						</div>
						<div className='col-3' id='namelist'>
							<img  src={liangyu} width='70%'/>
							<div className='name'>梁煜</div>
							<div>南开大学</div>
							<div>yliang1994@163.com</div>
							<div>17662082208</div>
							<div>南开大学人工智能学院硕士二年级.熟悉图像分割、图像检索等计算机视觉常用算法，熟悉Python编程、熟悉Pytorch、Keras等框架。主要工作：数据预处理，2D模型设计搭建。</div>
						</div>
						<div className='col-3' id='namelist'>
							<img  src={dog3} width='70%' />
							<div className='name'>王飞</div>
							<div>北京大学</div>
							<div>001@pku.edu.cn</div>
							<div>17812012798</div>
							<div>北京大学研究生二年级在读，主要研究计算机视觉方向，熟悉常用的图像分割、目标识别等深度学习方法。在项目中主要负责3D分割模型的搭建，优化。</div>
						</div>

					</div>
				</div>

			</React.Fragment>
		)
	}
}


Contacts.propTypes = {
	contacts: PropTypes.array.isRequired,
	getContacts: PropTypes.func.
	isRequired
}

const mapStateToProps = (state) => ({
	contacts: state.contact.contacts
});



export default connect(mapStateToProps, {
	getContacts
})(Contacts);