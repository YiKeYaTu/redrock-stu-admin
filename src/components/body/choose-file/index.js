import Dbind from 'dbind';
import css from './index.css';

export default Dbind.createClass({
  changeColor(color) {
    this.trackingUpdate({
      color: color
    })
  },
  changeFile(file) {
    console.log(file);
    this.trackingUpdate({
      fileInf: file
    });
  },
  data() {
    return {
      color: '#333',
      fileInf: null,
      handleDrop(e) {
        e.preventDefault();
        this.changeColor('#333');
        const uploadFile = e.dataTransfer.files[0];
        this.changeFile(uploadFile);
      },
      handleDragOver(e) {
        e.preventDefault();
        this.changeColor('#cf4646');
      },
      handleDragLeave(e) {
        this.changeColor('#333');
      },
      handleClick(e) {
        this.refs.file.click();
      },
      handleFileChange(e) {
        const uploadFile = e.target.files[0];
        this.changeFile(uploadFile)
      },
    }
  },
  template: `
    <div 
      onclick="{{ handleClick($event) }}"
      ondragover="{{ handleDragOver($event) }}"
      ondragleave="{{ handleDragLeave($event) }}"
      ondrop="{{ handleDrop($event) }}"
      class="${css['drag-file']}"
      style="color: {{ color }}">
      +
    </div>
    <p data-if="!fileInf" class="${css['notice']}">
      <span>请拖拽文件到上面的框内</span>
      <span>或者点击框选择文件</span>
    </p>
    <div class="${css['upload-inf']}" data-if="fileInf">
      <p>
        文件名：
        <span>{{ fileInf.name.slice(0, 10) }} ...</span>
      </p>
      <p>
        文件类型：
        <span>{{ fileInf.type.slice(0, 10) }} ...</span>
      </p>
      <p>
        文件大小：
        <span>{{ fileInf.size }}kb</span>
      </p>
      <input class="${css['upload-button']}" type="submit"></input>
    </div>
    <input ref="file" style="display: none;" onchange="{{ handleFileChange($event) }}" type="file" />
  `,
});