var liList = document.getElementsByTagName('li');
		var sectionList = document.getElementsByTagName('section');
	


		for(var i = 0; i < liList.length;i++){
			// 自动生成自定义属性
			// liList[i].setAttribute("dawei-index",i)


			// 为每一个li绑定单击事件
			liList[i].onmousemove = function(){
				// 怎么在事件处理函数里代表当前点击的到底是第几个li？
				// this出现在事件处理函数中：它指向的是触发该事件的Node节点
				
				// 干掉所有li的class
				for(var j = 0; j < liList.length;j++){
					liList[j].className = "";
					sectionList[j].className = "";
				}

				this.className = "active";

				// 给当前的li所对应的section的class属性设置成show
				sectionList[this.getAttribute("index")].className = "show";

			}

		}

