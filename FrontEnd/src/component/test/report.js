import React,{
	Component
}  from "react";
import './report.css'
import {
	connect
} from 'react-redux';
import {addAge,addState,addCaseNum,addDetail,
        Classification,livePred} from '../../actions/contactActions'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



class Report extends Component {
    creatPdf = () => { html2canvas(
            this.pdfs,
            {           
             dpi: window.devicePixelRatio,      
                   useCORS: true,        
            })
            .then(canvas=>{
                   let contentWidth = canvas.width;     
                   let contentHeight = canvas.height;     
                   let pageHeight = contentWidth / 592.28 * 841.89;  
                   let leftHeight = contentHeight;
                   let position = 50;
                   let imgWidth = 560.28;
                   let imgHeight = 560.28/contentWidth * contentHeight;
                   let pageData = canvas.toDataURL('image/jpeg', 1.0); 
                   let pdf = new jsPDF('', 'pt', 'a4');           
                    if (leftHeight < pageHeight) {                
                        pdf.addImage(pageData, 'JPEG', 26, 40, imgWidth, imgHeight );         
                       } else {            
                             while(leftHeight > 0) {      
                              pdf.addImage(pageData, 'JPEG', 26, position, imgWidth, imgHeight);
                                    // 如果pdf为两页且内容有重合需要更改下面的560.28数值  
                                  position -= 560;                 
                   if(leftHeight > 0) {                
                             pdf.addPage();             
                           }    
                                }      
                      }          
                  pdf.save("MRI_segmentation_report.pdf");      
              })   
         }

    

    render() {

        var myDate = new Date();
        var year = myDate.getFullYear(); 
        var month = myDate.getMonth()+1; 
        var day = myDate.getDate();
        var time = year+'-'+month+'-'+day;

        const {
            age,
            case_state,
            case_num,
            detail,
            classification,
            live_pred,
        } = this.props
        
        return(
            <div>
                <div ref={(pdf)=>this.pdfs=pdf}>
                <center>
                {/* <button id="renderPdf" onClick={this.downloadpdf.bind(this)}>DOWNLOAD PDF</button> */}
                
                    <div className='title' id='renderreport'>MRI分割结果报告</div>
                    
                    <div className='report-form'>
                        <div className='report-head'>
                            <div className='container-fluid'>
                                <div className='row' id='class1'>
                                    <div className='col'>检测项目：胶质瘤
                                    </div>
                                    <div className='col'>病例编号：{case_num}
                                    </div>
                                    <div className='col'>分割时间：{time}
                                    </div>
                                </div>
                                <div className='row' id='class2'>
                                    <div className='col-4'>年龄：{age}
                                    </div>
                                    <div className='col-4'>处理状态：{case_state}
                                    </div>
                                </div>
                            </div>
                         
                        </div>
                        {/* <div className='extraline'/> */}
                        <div className='report-info'>
                            <div className='container-fluid'>

                                <div className='row' id='mrzhengxiang'>
                                    <div className='col-sm-2'>MR征象：
                                    </div>
                                    <div className='col' id='info1'>{detail}
                                    </div>
                                    
                                </div>
                                
                                <div className='row' id='mr-suggestion'>
                                    <div className='col-sm-2'>MR意见：
                                    </div>
                                    <div className='col' id='info1'>
                                        <div className='illness'>
                                        {classification}
                                        </div>
                                        <div className='live-period'>
                                        预估生存期：{live_pred}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='seg-img'>
                            <div className='container-fluid' id='container-seg'>
                            {/* <div className='row' id='img-result'>
                            图像结果：
                            </div> */}
                                <div className='row' id='img_area'>
                                    <div className='col-sm-2'>
                                    2D分割图：
                                    </div>
                                    <div className='col-3'id='info1'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_22.jpg'} width='240px' height='240px' />
                                    </div>       
                                    <div className='col-3'id='info1'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_24.jpg'} width='240px' height='240px' />
                                    </div> 
                                    <div className='col-3'id='info1'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_26.jpg'} width='240px' height='240px' />
                                    </div>     
                                    <div className='col-sm-2'>
                                    
                                    </div>
                                    <div className='col-3'id='info1'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_28.jpg'} width='240px' height='240px' />
                                    </div>       
                                    <div className='col-3'id='info1'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_30.jpg'} width='240px' height='240px' />
                                    </div> 
                                    <div className='col-3'id='info1'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_32.jpg'} width='240px' height='240px' />
                                    </div>   <div className='col-sm-2'>
                                    
                                    </div>
                                    <div className='col-3'id='info1'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_34.jpg'} width='240px' height='240px' />
                                    </div>       
                                    <div className='col-3'id='info1'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_36.jpg'} width='240px' height='240px' />
                                    </div> 
                                    <div className='col-3'id='info1'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_38.jpg'} width='240px' height='240px' />
                                    </div>    

                       
                                </div>
          
                            </div>
                        </div>
                    </div>

                </center>
                <div className='wxcode'>扫描二维码在小程序中查看分割报告
                    <div>
                        <img src={process.env.PUBLIC_URL + "/wxCode.jpg"} width='200px'/>
                    </div>
                </div>

                </div> 
                <center>
                    <button id='printpdf' className= 'btn-lg' onClick={this.creatPdf.bind(this)}> 点击生成pdf </button>
                </center>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
	age: state.contact.age,
    case_state:state.contact.case_state,
    case_num:state.contact.case_num,
    detail:state.contact.detail,
    classification:state.contact.classification,
    live_pred: state.contact.live_pred,
});



export default connect(mapStateToProps, {
    addAge,addState,addCaseNum,addDetail,
    Classification,livePred,
})(Report);