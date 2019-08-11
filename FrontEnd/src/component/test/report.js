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
                   let position = 100;
                   let imgWidth = 560.28;
                   let imgHeight = 560.28/contentWidth * contentHeight;
                   let pageData = canvas.toDataURL('image/jpeg', 1.0); 
                   let pdf = new jsPDF('', 'pt', 'a4');           
                    if (leftHeight < pageHeight) {                
                        pdf.addImage(pageData, 'JPEG', 26, 100, imgWidth, imgHeight );         
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
        var year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
        var month = myDate.getMonth()+1; //获取当前月份(0-11,0代表1月)
        var day = myDate.getDate(); //获取当前日(1-31)
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
                                <div className='row'>
                                    <div className='col'>检测项目：胶质瘤
                                    </div>
                                    <div className='col'>病例编号：{case_num}
                                    </div>
                                    <div className='col'>分割时间：{time}
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-4'>年龄：{age}
                                    </div>
                                    <div className='col-4'>处理状态：{case_state}
                                    </div>
                                </div>
                            </div>
                         
                        </div>
                        <div className='extraline'/>
                        <div className='report-info'>
                            <div className='container-fluid'>

                                <div className='row'>
                                    <div className='col-sm-2'>MR征象：
                                    </div>
                                    <div className='col'>{detail}
                                    </div>
                                </div>
                                
                                <div className='row' id='mr-suggestion'>
                                    <div className='col-sm-2'>MR意见：
                                    </div>
                                    <div className='col' >
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
                            <div className='container-fluid'>
                            {/* <div className='row' id='img-result'>
                            图像结果：
                            </div> */}
                                <div className='row'>
                                    <div className='col-sm-2'>
                                    2D分割图：
                                    </div>
                                    <div className='col-3'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_1.jpg'} width='240px' height='240px' />
                                    </div>       
                                    <div className='col-3'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_2.jpg'} width='240px' height='240px' />
                                    </div> 
                                    <div className='col-3'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_3.jpg'} width='240px' height='240px' />
                                    </div>     
                                    <div className='col-sm-2'>
                                    
                                    </div>
                                    <div className='col-3'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_4.jpg'} width='240px' height='240px' />
                                    </div>       
                                    <div className='col-3'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_5.jpg'} width='240px' height='240px' />
                                    </div> 
                                    <div className='col-3'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_6.jpg'} width='240px' height='240px' />
                                    </div>   <div className='col-sm-2'>
                                    
                                    </div>
                                    <div className='col-3'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_7.jpg'} width='240px' height='240px' />
                                    </div>       
                                    <div className='col-3'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_8.jpg'} width='240px' height='240px' />
                                    </div> 
                                    <div className='col-3'>
                                        <img src={process.env.PUBLIC_URL + '/'+`${case_num}` + '_9.jpg'} width='240px' height='240px' />
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
                    <button  className= 'btn-lg' onClick={this.creatPdf.bind(this)}> 点击生成pdf </button>
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