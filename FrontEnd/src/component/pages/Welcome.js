import React from 'react';
import brainimg from "../../imgs/background.jpg"
import poster from "../../imgs/poster.jpg"
import logo from "../../imgs/logo4.png"

import "./Welcome.css"
import {
	Link
} from 'react-router-dom';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Test from '../test/Test';

      {/* 			<h1 className = "display-4" ><span className = "text-muted"><span className = "font-italic">3D</span></span>
      <span className="text-warning "><small>天使</small></span> </h1> */}
export default () => {
    

    const intro = " 曾经有想成为医生的梦想，却被现实阻挡在外？心怀救死扶伤的心情，却只能手敲代码，诊断BUG？现实并不残酷，你需要的只是一个思想的转变——曲线救国，\
    用AI助力医疗！目前我国医疗仍存在诸多问题：专业医生培训周期长，医疗资源不均衡。而AI正在引发一场变革。脑部肿瘤的诊断对于前期诊断、手术治疗和放射治疗起着至关重要的作用。\
    利用AI可以提升医疗效率，甚至挽救患者的生命！本课题将使用计算机视觉分类、分割的最新技术对脑部的MRI数据进行建模，找到病灶所在，并预判生存期。我们已经为同学们准备好近两百例\
    的患者数据和4个MRI模态上的病灶标注。让我们一起用黑科技识别4种不同的病灶组织，用3D的可视化手段呈现病灶的三维结构，分析患者数据，判断患者的存活率，给出个性化诊断！用AI助力医疗，\带你感受不一样的AI魅力！你将是下一个AI天使！"
    const intro3 = '关键词：医疗,3D,深度学习,图像分割';
    const intro2 = "本课题涉及：MRI数据的预处理分析，多模态数据校准；图像分割模型的搭建；存活判断的数据分析与建模；3D分割结果的可视化以及报告的生成。"
    const startest = false;
    

	return (
		<div className = 'welcome'>

      <div className = 'bgimg'>
        <div className='deecamp'> DeeCamp 2019</div>
        <div className='groupname1'> 3D医疗影像处理</div>
        <div className='groupname'> --MRI胶质瘤分割</div>
        <div className='briefintro'>第5组 脑壳不疼</div>
        

        <div className = "deecampimg" >
          <button  className = "btn-lg">
            <Link to = "/test" className = "testbuttontext" >Let's Go</Link>
          </button>
        </div>
      </div>
       
       <center className='main'>
      <div className='container-fluid' id='welcome-text'>
      <div className='row'>
        <h2 className='introduction'>项目简介</h2>
      </div>
        <div className='row'>
          <div className='col-sm-6'>
          曾经有想成为医生的梦想，却被现实阻挡在外？心怀救死扶伤的心情，却只能手敲代码，诊断BUG？现实并不残酷，你需要的只是一个思想的转变——曲线救国.
        用AI助力医疗！目前我国医疗仍存在诸多问题：专业医生培训周期长，医疗资源不均衡。而AI正在引发一场变革。脑部肿瘤的诊断对于前期诊断、手术治疗和放射治疗起着至关重要的作用。
        利用AI可以提升医疗效率，甚至挽救患者的生命！
          </div>
          <div className='col-sm-6'>
          本课题将使用计算机视觉分类、分割的最新技术对脑部的MRI数据进行建模，找到病灶所在，并预判生存期。我们已经为同学们准备好近两百例
    的患者数据和4个MRI模态上的病灶标注。让我们一起用黑科技识别4种不同的病灶组织，用3D的可视化手段呈现病灶的三维结构，分析患者数据，判断患者的存活率，给出个性化诊断！用AI助力医疗，带你感受不一样的AI魅力！你将是下一个AI天使！
          </div>
        </div>
        <div className = 'row-1'>
        关键词：医疗,3D,深度学习,图像分割
        </div>
        <div className='row-2'>
        本课题涉及：MRI数据的预处理分析，多模态数据校准；图像分割模型的搭建；存活判断的数据分析与建模；3D分割结果的可视化以及报告的生成。
        </div>
      </div>

        
       
        </center>
		</div>
        
	)
}