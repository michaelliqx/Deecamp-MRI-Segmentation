# Deecamp-MRI-Segmentation

### 文件说明 （只包括部分重要文件）
    -BackEnd
        - Code 包含部分前期测试代码 不是最终使用模型
        - Data Demo使用数据 在运行web时可使用这个数据（四个一起选择并提交）
        - main
            - __init__.py 前后端API
            - display3D.py 显示3D头部模型
            - drawChart.py 分割结果分析
            - evaluation_dice.py loss function
            - generateQR.py 生成二维码
            - survival_regression.py 生存分析
            - upload2Qcloud.py 上传小程序所用数据到云端
            - model_18.h5 使用的模型文件
        - static build之后生成的文件夹，每次执行npm build会删除并重新生成
    -Demo 可忽略
    -FrontEnd React前端框架文件夹
        - node_modules dependencies
        - public 公共文件夹
        - src 功能文件
            - actions React中的action声明与定义
            - component
                - contact 联系人页面
                - layout 排版
                - NIFTI-Reader 显示二维滑动窗口
                - pages 其余页面
                - test 测试页面
            - imgs 图像
            - reducers React中的reducer声明与定义

### 如何使用
#### 安装与运行
- 安装 npm, nodejs. 在终端执行 npm install安装dependencies（有 FrontEnd/node_modules文件夹则无需执行npm install），确认python包的安装
- 运行 run.py, 然后打开网页 （http://localhost:8010)

#### web端使用
- 首页： 点击start开始测试
- 点击黑底白色上传箭头上传测试文件（可多选，测试文件在 BackEnd/Data, 四个文件都需要上传）
- 填写年龄和状态， 年龄数字即可，如：18，50。状态见提示： GTR,STR,NA(代表已手术，未手术，未知)
- 点击开始测试， 分割完成后会自动跳转页面。 
- 跳转后可以看2D的切片，可滑动以及3D分割结果。（3D建模 那四个字点击两次可以复原3D模型）。也可以下载结果文件。 （注意：不能马上点击生成报告！！！！在页面跳转之后大概需要1-2分钟才能把报告需要的结果生成并上传到云端！！！！！）
- 点击生成报告 可查看报告，最下方有二维码可以扫描进入微信小程序，也可以生成报告的PDF
- 最上方状态栏还有组员信息及联系方式（contact）以及deecamp的介绍(about)
            
