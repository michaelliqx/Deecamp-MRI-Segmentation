import React, {
	Component
} from 'react';
import "./test.css"
import nifti from "../NIFTI-Reader/nifti-reader.js"
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {
	Link
} from 'react-router-dom';
import {
	connect
} from 'react-redux';
import logo from '../../imgs/logo2.png'
import arrow from '../../imgs/arrow.png'
import mri from '../../imgs/MRI.png'
import chongjian from '../../imgs/3Dchongjian.png'
import slice from '../../imgs/2Dslice.png'
import gen_report_btn from '../../imgs/gen_report_btn.png'
import loadingimg from '../../imgs/loading.gif'
import {addAge,addState,addCaseNum,addDetail,
	Classification,livePred,Loading} from '../../actions/contactActions'
	var fileName = null;
	var segName = null;
	
	function readNIFTI(dataFile, dataSegmentation) {
		var canvas = document.getElementById('myCanvas');
		var slider = document.getElementById('myRange');
		var niftiHeader, niftiImage;
			var segmentationHeader, segmentationImage;
	
		// parse nifti
		if (nifti.isCompressed(dataSegmentation)) {
			dataSegmentation = nifti.decompress(dataSegmentation);
		}
		if (nifti.isCompressed(dataFile)) {
			dataFile = nifti.decompress(dataFile);
		}
		
		if (nifti.isNIFTI(dataSegmentation)) {
			segmentationHeader = nifti.readHeader(dataSegmentation);
			segmentationImage = nifti.readImage(segmentationHeader, dataSegmentation);
		}
	
		if (nifti.isNIFTI(dataFile)) {
			niftiHeader = nifti.readHeader(dataFile);
			niftiImage = nifti.readImage(niftiHeader, dataFile);
		}
	
		// set up slider
		var slices = niftiHeader.dims[3];
		slider.max = slices - 1;
		slider.value = Math.round(slices / 2);
		slider.oninput = function() {
			drawCanvas(canvas, slider.value, niftiHeader, niftiImage, segmentationHeader, segmentationImage);
		};
	
		// draw slice
		drawCanvas(canvas, slider.value, niftiHeader, niftiImage, segmentationHeader, segmentationImage);
	}
	
	function drawCanvas(canvas, slice, niftiHeader, niftiImage, segmentationHeader, segmentationImage) {
		// get nifti dimensions
		var cols = niftiHeader.dims[1];
		var rows = niftiHeader.dims[2];
	
		// set canvas dimensions to nifti slice dimensions
		canvas.width = cols;
		canvas.height = rows;
	
		// make canvas image data
		var ctx = canvas.getContext("2d");
		var canvasImageData = ctx.createImageData(canvas.width, canvas.height);
	
		// convert raw data to typed array based on nifti datatype
		var typedData;
		var segData;
		
		if (niftiHeader.datatypeCode === nifti.NIFTI1.TYPE_UINT8) {
			typedData = new Uint8Array(niftiImage);
		} else if (niftiHeader.datatypeCode === nifti.NIFTI1.TYPE_INT16) {
			typedData = new Int16Array(niftiImage);
		} else if (niftiHeader.datatypeCode === nifti.NIFTI1.TYPE_INT32) {
			typedData = new Int32Array(niftiImage);
		} else if (niftiHeader.datatypeCode === nifti.NIFTI1.TYPE_FLOAT32) {
			typedData = new Float32Array(niftiImage);
		} else if (niftiHeader.datatypeCode === nifti.NIFTI1.TYPE_FLOAT64) {
			typedData = new Float64Array(niftiImage);
		} else if (niftiHeader.datatypeCode === nifti.NIFTI1.TYPE_INT8) {
			typedData = new Int8Array(niftiImage);
		} else if (niftiHeader.datatypeCode === nifti.NIFTI1.TYPE_UINT16) {
			typedData = new Uint16Array(niftiImage);
		} else if (niftiHeader.datatypeCode === nifti.NIFTI1.TYPE_UINT32) {
			typedData = new Uint32Array(niftiImage);
		} else {
			return;
		}
	
		if (segmentationHeader.datatypeCode === nifti.NIFTI1.TYPE_UINT8) {
			segData = new Uint8Array(segmentationImage);
		} else if (segmentationHeader.datatypeCode === nifti.NIFTI1.TYPE_INT16) {
			segData = new Int16Array(segmentationImage);
		} else if (segmentationHeader.datatypeCode === nifti.NIFTI1.TYPE_INT32) {
			segData = new Int32Array(segmentationImage);
		} else if (segmentationHeader.datatypeCode === nifti.NIFTI1.TYPE_FLOAT32) {
			segData = new Float32Array(segmentationImage);
		} else if (segmentationHeader.datatypeCode === nifti.NIFTI1.TYPE_FLOAT64) {
			segData = new Float64Array(segmentationImage);
		} else if (segmentationHeader.datatypeCode === nifti.NIFTI1.TYPE_INT8) {
			segData = new Int8Array(segmentationImage);
		} else if (segmentationHeader.datatypeCode === nifti.NIFTI1.TYPE_UINT16) {
			segData = new Uint16Array(segmentationImage);
		} else if (segmentationHeader.datatypeCode === nifti.NIFTI1.TYPE_UINT32) {
			segData = new Uint32Array(segmentationImage);
		} else {
			return;
		}
	
		// offset to specified slice
		var sliceSize = cols * rows;
		var sliceOffset = sliceSize * slice;
	
		// draw pixels
		for (var row = 0; row < rows; row++) {
			var rowOffset = row * cols;
	
			for (var col = 0; col < cols; col++) {
				var offset = sliceOffset + rowOffset + col;
				var value = typedData[offset];
				var seg = segData[offset];
	
				if (seg == 1) {
					canvasImageData.data[(rowOffset + col) * 4] = 145 & 0xFF; 
					canvasImageData.data[(rowOffset + col) * 4 + 1] = 15 & 0xFF; 
					canvasImageData.data[(rowOffset + col) * 4 + 2] = 253 & 0xFF; 
					canvasImageData.data[(rowOffset + col) * 4 + 3] = 0xFF;
				}else if(seg == 2){
					canvasImageData.data[(rowOffset + col) * 4] = 166 & 0xFF; 
					canvasImageData.data[(rowOffset + col) * 4 + 1] = 253 & 0xFF; 
					canvasImageData.data[(rowOffset + col) * 4 + 2] = 15 & 0xFF; 
					canvasImageData.data[(rowOffset + col) * 4 + 3] = 0xFF;
				}else if (seg == 3) {
					canvasImageData.data[(rowOffset + col) * 4] = 255 & 0xFF; 
					canvasImageData.data[(rowOffset + col) * 4 + 1] = 15 & 0xFF; 
					canvasImageData.data[(rowOffset + col) * 4 + 2] = 47 & 0xFF; 
					canvasImageData.data[(rowOffset + col) * 4 + 3] = 0xFF;
				}else{
					canvasImageData.data[(rowOffset + col) * 4] = value & 0xFF; // seg_val * 60 + !seg_val * value;
					canvasImageData.data[(rowOffset + col) * 4 + 1] = value & 0xFF; // seg_val * 40 + !seg_val * value;
					canvasImageData.data[(rowOffset + col) * 4 + 2] = value & 0xFF; // seg_val * 10 + !seg_val * value;
					canvasImageData.data[(rowOffset + col) * 4 + 3] = 0xFF;
				}
				
			}
		}
	
		ctx.putImageData(canvasImageData, 0, 0);
	}
	
	
	function makeSlice(file, start, length) {
		var fileType = (typeof File);
	
		if (fileType === 'undefined') {
			return function () {};
		}
	
		if (File.prototype.slice) {
			return file.slice(start, start + length);
		}
	
		if (File.prototype.mozSlice) {
			return file.mozSlice(start, length);
		}
	
		if (File.prototype.webkitSlice) {
			return file.webkitSlice(start, length);
		}
	
		return null;
	}
	
	function readFile(file, segmentation) {
		var blobFile = makeSlice(file, 0, file.size);
		var bolbSegmentation = makeSlice(segmentation, 0, segmentation.size);
	
		var readerFile = new FileReader();
		var readerSegmentation = new FileReader();
		var flagS = false;
		var flagF = false;
		var resultS = null;
		var resultF = null;
		readerSegmentation.onloadend = function (seg) {
			if (seg.target.readyState === FileReader.DONE) {
				flagS = true;
				resultS = seg.target.result;
				if (flagS && flagF) {
					readNIFTI(resultF, resultS);
				}
			}
		}
		readerFile.onloadend = function (evt) {
			if (evt.target.readyState === FileReader.DONE) {
				flagF = true;
				resultF = evt.target.result;
				if (flagS && flagF) {
					readNIFTI(resultF, resultS);
				}
			}
		}
	
		readerFile.readAsArrayBuffer(blobFile);
		readerSegmentation.readAsArrayBuffer(bolbSegmentation);
	}

class Test extends Component {

	constructor(props){ //构造函数
		super(props);
		this.state = {
		show3D:true,
		allowdownload:false,
		age:'',
		case_state:'',
		case_num:null,
		detail:'',
		classification:'高级别胶质瘤',
		live_pred:'',
		loading:false,
		}
		}

	onChange(e) {
		var form = new FormData();
		for (var i = 0; i < 4; i++) {
			const file = e.target.files[i];

			if (file){
				form.append('filessss',file,file.name)
			}
		}
		this.setState({
			FormData:form
		})
	}

	addage(e) {

		var age = e.target.value;
		this.setState({
			age:age
		})
	}

	addstate(e) {

		var state = e.target.value;
		var m = 100000
		var n = 999999
		var num = Math.floor(Math.random()*(n-m)+m);
		this.setState({
			case_state:state,
			case_num:num,
		})

	}


	getData(e){ //请求数据函数
		e.preventDefault();
		let formData = this.state.FormData;
		var blob1 = new Blob();
		var blob2 = new Blob();
		fetch(`/filesname`,{
		method: 'POST',
		body: formData
		})
		.then(response=> {
			return response.blob();
		})
		.then( blob1 => {
			fetch(`/t1name`, {
				method:'GET',
			})
			.then(res =>{
				return res.blob()
			})
			.then(blob2=>{
				this.setState({allowdownload:true});
				readFile(blob2,blob1);
				var form = new FormData();
				form.append('case_num',this.state.case_num)
				form.append('age',this.state.age)
				form.append('case_state',this.state.case_state)
				fetch(`/wxcode`,{
					method: 'POST',
					body:form,
					})
					.then(res =>{
						res.json()
						.then( resdata=>{
							this.setState({
								detail: resdata
							})
						this.props.addDetail(this.state.detail);
						fetch (`/livepred`, {
							method:'POST',
							body:form
						})
						.then(res => {
							res.json()
							.then(resdata=>{
								this.setState({
									live_pred:resdata
								})
								this.props.livePred(this.state.live_pred);
							})
						})
						this.props.Classification(this.state.classification);					
						})
					})
		
			})
		})

		

		}

		downloadImage(src) {
			var canvas = document.createElement('canvas');
			var img = document.createElement('img');
			img.onload = function(e) {
				canvas.width = img.width;
				canvas.height = img.height;
				var context = canvas.getContext('2d');
				context.drawImage(img, 0, 0, img.width, img.height);
				window.navigator.msSaveBlob(canvas.msToBlob(),'image.jpg');
			}
			img.src = src;
		}
		
	onClick(e) {
		e.preventDefault();
		this.setState({loading:true})
		this.props.addAge(this.state.age);
		this.props.addState(this.state.case_state);
		this.props.addCaseNum(this.state.case_num);
		// console.log(this.props.loading)
		this.getData(e);
		
	}


	show3D(e) {
		e.preventDefault();
		this.setState({
			show3D:!this.state.show3D,
		})
	}
	
	shouldComponentUpdate(nextProps,nextState){
		if(nextState.loading != this.state.loading) {
			this.setState({allowdownload:true});
			return true;
		}
		if(nextState.allowdownload == this.state.allowdownload){
		  return true;
		}
	}

	render() {
		const loading = this.state.loading
		// const res_img = this.state.res_img;
		return(
			<div>
			{!this.state.allowdownload ? 
					<form encType="multipart/form-data" target="myIframe" className='myform'>
					<center>
						<div className='project-logo'> 
						<img  src={mri} width='438px' height='242px'/>
						</div>
						{/* <h1 className='testtitle'>DeeBrain</h1> */}
						<div className='uploadfile'>
							
							<label for="upload" class="ui-upload"><img src={arrow} width='50%' /></label>
							<input className='uploadform' type="file" id="upload"  multiple = "multiple" onChange={(e)=>this.onChange(e)}/>
							{/* <label class="ui-upload">upload<input type="file" multiple = "multiple" onChange={(e)=>this.onChange(e)}/></label> */}
							
							{/* <input className='uploadform' type="file" name="file" multiple = "multiple" onChange={(e)=>this.onChange(e)} /> */}

						<div className='uptext'>上传文件  <span className='submitnote'> / 仅限nii.gz文件</span></div>
						
						</div>
						
						<div>
							<div>
							<input className='ageform' placeholder='    请输入年龄' type="text-input"  name='text' multiple = "multiple" onChange={(e)=>this.addage(e)}/>
							</div>
							<div>
							<input className='stateform' placeholder='    手术状态(GTR,STR,NA)' type="text-input"  name='text' multiple = "multiple" onChange={(e)=>this.addstate(e)}/>
							</div>
							<div className='submitform'>
							{!loading ?<input id='submit1'  className='btn-lg' type="submit" value="提交" onClick={this.onClick.bind(this)} />
							: <div><img src={loadingimg}/>正在加载请稍候(可能需要几分钟)</div>}
							</div>
						</div>
						<span className='report'>

						</span>
					</center>
					</form>
			 :null}

		{this.state.allowdownload ?
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-sm-4'>
					<img className='slice' src={slice} />
					<div className='explain3'> 此处为分割结果横截面图</div>
						<center className='2Ddisplay'>
						<canvas  id="myCanvas" align='center' width="300" height="300"></canvas><br />
						<input type="range" min="1" max="100"  className="slider" id="myRange" />
							<div className='text_block' >
								<div id='explain'><label className='red'></label>增强肿瘤</div>
								<div id='explain1'><label className='green'></label>肿瘤周围水肿</div>
								<div id='explain2'><label className='purple'></label>肿瘤核心</div>
							</div>
							<div >
							<button  className = "btn-lg">
								<a id ='download' href= {process.env.PUBLIC_URL + '/pred.nii.gz'} 
								download="pred.nii.gz">点击下载</a>
          					</button>
								<div className='textinfo'>仅包含分割部分(.nii.gz文件)，可与原图结合阅片工具（如MITK）查看</div>
							</div>
						</center>
				</div>
				<div id='chongjian-square' className='col-sm-6'>
					<div className = "myframe">
						<label for="upload1" className='label1'><img className='chongjian' src={chongjian} /></label>
						<input height='20pt' id='upload1' type='submit' onClick={this.show3D.bind(this)} />
						{/* <div className='segline2'></div> */}
						<div className='explain4'> 此处为3D还原后的脑部模型</div>
						{/* <div className='3D-display'> */}
							{/* <input height='20pt' className='btn-lg' type='submit' onClick={this.show3D.bind(this)} value='查看3维还原'></input> */}
						{/* </div> */}
						<div>
							 {this.state.show3D? <iframe id= "myframe1" frameBorder="0" width="630px" height="500px" src={process.env.PUBLIC_URL + '/3D.html'} ></iframe> :null}
						</div>
					</div>
				</div>
				<div className='col-sm-1'>
					<div className='generate_report'>
					<Link className='textbox' to='/report'><img src={gen_report_btn}></img></Link>
					</div>
				</div>
			</div>
			
		</div>
		:null} 


		</div>
		)
	}
}

const mapStateToProps = (state) => ({
	age: state.contact.age,
	case_state:state.contact.case_state,
	case_num:state.contact.case_num,
	detail:state.contact.detail,
	classification: state.contact.classification,
	live_pred: state.contact.live_pred,
	loading:state.contact.loading,
});


export default connect(mapStateToProps, {
	addAge,addState,addCaseNum,addDetail,
	livePred,Classification,Loading,
})(Test);