!function(t){var i={};function e(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=t,e.c=i,e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,i){if(1&i&&(t=e(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var s in t)e.d(n,s,function(i){return t[i]}.bind(null,s));return n},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},e.p="",e(e.s=1)}([function(t,i,e){var n;(function(){var s,o,r,a,h,l,c,u,p,d,f,g,m,v=[].slice,x={}.hasOwnProperty,y=function(t,i){for(var e in i)x.call(i,e)&&(t[e]=i[e]);function n(){this.constructor=t}return n.prototype=i.prototype,t.prototype=new n,t.__super__=i.prototype,t};!function(){var t,i,e,n,s,o,r;for(e=0,s=(r=["ms","moz","webkit","o"]).length;e<s&&(o=r[e],!window.requestAnimationFrame);e++)window.requestAnimationFrame=window[o+"RequestAnimationFrame"],window.cancelAnimationFrame=window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];t=null,n=0,i={},requestAnimationFrame?window.cancelAnimationFrame||(t=window.requestAnimationFrame,window.requestAnimationFrame=function(e,s){var o;return o=++n,t(function(){if(!i[o])return e()},s),o},window.cancelAnimationFrame=function(t){return i[t]=!0}):(window.requestAnimationFrame=function(t,i){var e,n,s,o;return e=(new Date).getTime(),o=Math.max(0,16-(e-s)),n=window.setTimeout(function(){return t(e+o)},o),s=e+o,n},window.cancelAnimationFrame=function(t){return clearTimeout(t)})}(),m=function(t){var i,e;for(t-=3600*(i=Math.floor(t/3600))+60*(e=Math.floor((t-3600*i)/60)),t+="",e+="";e.length<2;)e="0"+e;for(;t.length<2;)t="0"+t;return(i=i?i+":":"")+e+":"+t},f=function(){var t,i,e;return e=(i=1<=arguments.length?v.call(arguments,0):[])[0],t=i[1],p(e.toFixed(t))},g=function(t,i){var e,n,s;for(e in n={},t)x.call(t,e)&&(s=t[e],n[e]=s);for(e in i)x.call(i,e)&&(s=i[e],n[e]=s);return n},p=function(t){var i,e,n,s;for(n=(e=(t+="").split("."))[0],s="",e.length>1&&(s="."+e[1]),i=/(\d+)(\d{3})/;i.test(n);)n=n.replace(i,"$1,$2");return n+s},d=function(t){return"#"===t.charAt(0)?t.substring(1,7):t},u=function(){function t(t,i){null==t&&(t=!0),this.clear=null==i||i,t&&AnimationUpdater.add(this)}return t.prototype.animationSpeed=32,t.prototype.update=function(t){var i;return null==t&&(t=!1),!(!t&&this.displayedValue===this.value)&&(this.ctx&&this.clear&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),i=this.value-this.displayedValue,Math.abs(i/this.animationSpeed)<=.001?this.displayedValue=this.value:this.displayedValue=this.displayedValue+i/this.animationSpeed,this.render(),!0)},t}(),r=function(t){function i(){return i.__super__.constructor.apply(this,arguments)}return y(i,u),i.prototype.displayScale=1,i.prototype.forceUpdate=!0,i.prototype.setTextField=function(t,i){return this.textField=t instanceof c?t:new c(t,i)},i.prototype.setMinValue=function(t,i){var e,n,s,o,r;if(this.minValue=t,null==i&&(i=!0),i){for(this.displayedValue=this.minValue,r=[],n=0,s=(o=this.gp||[]).length;n<s;n++)e=o[n],r.push(e.displayedValue=this.minValue);return r}},i.prototype.setOptions=function(t){return null==t&&(t=null),this.options=g(this.options,t),this.textField&&(this.textField.el.style.fontSize=t.fontSize+"px"),this.options.angle>.5&&(this.options.angle=.5),this.configDisplayScale(),this},i.prototype.configDisplayScale=function(){var t,i,e,n,s;return n=this.displayScale,!1===this.options.highDpiSupport?delete this.displayScale:(i=window.devicePixelRatio||1,t=this.ctx.webkitBackingStorePixelRatio||this.ctx.mozBackingStorePixelRatio||this.ctx.msBackingStorePixelRatio||this.ctx.oBackingStorePixelRatio||this.ctx.backingStorePixelRatio||1,this.displayScale=i/t),this.displayScale!==n&&(s=this.canvas.G__width||this.canvas.width,e=this.canvas.G__height||this.canvas.height,this.canvas.width=s*this.displayScale,this.canvas.height=e*this.displayScale,this.canvas.style.width=s+"px",this.canvas.style.height=e+"px",this.canvas.G__width=s,this.canvas.G__height=e),this},i.prototype.parseValue=function(t){return t=parseFloat(t)||Number(t),isFinite(t)?t:0},i}(),c=function(){function t(t,i){this.el=t,this.fractionDigits=i}return t.prototype.render=function(t){return this.el.innerHTML=f(t.displayedValue,this.fractionDigits)},t}(),s=function(t){function i(t,e){if(this.elem=t,this.text=null!=e&&e,i.__super__.constructor.call(this),void 0===this.elem)throw new Error("The element isn't defined.");this.value=1*this.elem.innerHTML,this.text&&(this.value=0)}return y(i,u),i.prototype.displayedValue=0,i.prototype.value=0,i.prototype.setVal=function(t){return this.value=1*t},i.prototype.render=function(){var t;return t=this.text?m(this.displayedValue.toFixed(0)):p(f(this.displayedValue)),this.elem.innerHTML=t},i}(),l=function(t){function i(t){if(this.gauge=t,void 0===this.gauge)throw new Error("The element isn't defined.");this.ctx=this.gauge.ctx,this.canvas=this.gauge.canvas,i.__super__.constructor.call(this,!1,!1),this.setOptions()}return y(i,u),i.prototype.displayedValue=0,i.prototype.value=0,i.prototype.options={strokeWidth:.035,length:.1,color:"#000000",iconPath:null,iconScale:1,iconAngle:0},i.prototype.img=null,i.prototype.setOptions=function(t){if(null==t&&(t=null),this.options=g(this.options,t),this.length=2*this.gauge.radius*this.gauge.options.radiusScale*this.options.length,this.strokeWidth=this.canvas.height*this.options.strokeWidth,this.maxValue=this.gauge.maxValue,this.minValue=this.gauge.minValue,this.animationSpeed=this.gauge.animationSpeed,this.options.angle=this.gauge.options.angle,this.options.iconPath)return this.img=new Image,this.img.src=this.options.iconPath},i.prototype.render=function(){var t,i,e,n,s,o,r,a,h;if(t=this.gauge.getAngle.call(this,this.displayedValue),a=Math.round(this.length*Math.cos(t)),h=Math.round(this.length*Math.sin(t)),o=Math.round(this.strokeWidth*Math.cos(t-Math.PI/2)),r=Math.round(this.strokeWidth*Math.sin(t-Math.PI/2)),i=Math.round(this.strokeWidth*Math.cos(t+Math.PI/2)),e=Math.round(this.strokeWidth*Math.sin(t+Math.PI/2)),this.ctx.beginPath(),this.ctx.fillStyle=this.options.color,this.ctx.arc(0,0,this.strokeWidth,0,2*Math.PI,!1),this.ctx.fill(),this.ctx.beginPath(),this.ctx.moveTo(o,r),this.ctx.lineTo(a,h),this.ctx.lineTo(i,e),this.ctx.fill(),this.img)return n=Math.round(this.img.width*this.options.iconScale),s=Math.round(this.img.height*this.options.iconScale),this.ctx.save(),this.ctx.translate(a,h),this.ctx.rotate(t+Math.PI/180*(90+this.options.iconAngle)),this.ctx.drawImage(this.img,-n/2,-s/2,n,s),this.ctx.restore()},i}(),function(){function t(t){this.elem=t}t.prototype.updateValues=function(t){return this.value=t[0],this.maxValue=t[1],this.avgValue=t[2],this.render()},t.prototype.render=function(){var t,i;return this.textField&&this.textField.text(f(this.value)),0===this.maxValue&&(this.maxValue=2*this.avgValue),i=this.value/this.maxValue*100,t=this.avgValue/this.maxValue*100,$(".bar-value",this.elem).css({width:i+"%"}),$(".typical-value",this.elem).css({width:t+"%"})}}(),h=function(t){function i(t){var e,n;this.canvas=t,i.__super__.constructor.call(this),this.percentColors=null,"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),e=this.canvas.clientHeight,n=this.canvas.clientWidth,this.canvas.height=e,this.canvas.width=n,this.gp=[new l(this)],this.setOptions()}return y(i,r),i.prototype.elem=null,i.prototype.value=[20],i.prototype.maxValue=80,i.prototype.minValue=0,i.prototype.displayedAngle=0,i.prototype.displayedValue=0,i.prototype.lineWidth=40,i.prototype.paddingTop=.1,i.prototype.paddingBottom=.1,i.prototype.percentColors=null,i.prototype.options={colorStart:"#6fadcf",colorStop:void 0,gradientType:0,strokeColor:"#e0e0e0",pointer:{length:.8,strokeWidth:.035,iconScale:1},angle:.15,lineWidth:.44,radiusScale:1,fontSize:40,limitMax:!1,limitMin:!1},i.prototype.setOptions=function(t){var e,n,s,o,r;for(null==t&&(t=null),i.__super__.setOptions.call(this,t),this.configPercentColors(),this.extraPadding=0,this.options.angle<0&&(o=Math.PI*(1+this.options.angle),this.extraPadding=Math.sin(o)),this.availableHeight=this.canvas.height*(1-this.paddingTop-this.paddingBottom),this.lineWidth=this.availableHeight*this.options.lineWidth,this.radius=(this.availableHeight-this.lineWidth/2)/(1+this.extraPadding),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),n=0,s=(r=this.gp).length;n<s;n++)(e=r[n]).setOptions(this.options.pointer),e.render();return this.render(),this},i.prototype.configPercentColors=function(){var t,i,e,n,s,o,r;if(this.percentColors=null,void 0!==this.options.percentColors){for(this.percentColors=new Array,o=[],e=n=0,s=this.options.percentColors.length-1;0<=s?n<=s:n>=s;e=0<=s?++n:--n)r=parseInt(d(this.options.percentColors[e][1]).substring(0,2),16),i=parseInt(d(this.options.percentColors[e][1]).substring(2,4),16),t=parseInt(d(this.options.percentColors[e][1]).substring(4,6),16),o.push(this.percentColors[e]={pct:this.options.percentColors[e][0],color:{r:r,g:i,b:t}});return o}},i.prototype.set=function(t){var i,e,n,s,o,r,a,h,c;for(t instanceof Array||(t=[t]),e=n=0,a=t.length-1;0<=a?n<=a:n>=a;e=0<=a?++n:--n)t[e]=this.parseValue(t[e]);if(t.length>this.gp.length)for(e=s=0,h=t.length-this.gp.length;0<=h?s<h:s>h;e=0<=h?++s:--s)(i=new l(this)).setOptions(this.options.pointer),this.gp.push(i);else t.length<this.gp.length&&(this.gp=this.gp.slice(this.gp.length-t.length));for(e=0,o=0,r=t.length;o<r;o++)(c=t[o])>this.maxValue?this.options.limitMax?c=this.maxValue:this.maxValue=c+1:c<this.minValue&&(this.options.limitMin?c=this.minValue:this.minValue=c-1),this.gp[e].value=c,this.gp[e++].setOptions({minValue:this.minValue,maxValue:this.maxValue,angle:this.options.angle});return this.value=Math.max(Math.min(t[t.length-1],this.maxValue),this.minValue),AnimationUpdater.run(this.forceUpdate),this.forceUpdate=!1},i.prototype.getAngle=function(t){return(1+this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(1-2*this.options.angle)*Math.PI},i.prototype.getColorForPercentage=function(t,i){var e,n,s,o,r,a,h;if(0===t)e=this.percentColors[0].color;else for(e=this.percentColors[this.percentColors.length-1].color,s=o=0,a=this.percentColors.length-1;0<=a?o<=a:o>=a;s=0<=a?++o:--o)if(t<=this.percentColors[s].pct){!0===i?(h=this.percentColors[s-1]||this.percentColors[0],n=this.percentColors[s],r=(t-h.pct)/(n.pct-h.pct),e={r:Math.floor(h.color.r*(1-r)+n.color.r*r),g:Math.floor(h.color.g*(1-r)+n.color.g*r),b:Math.floor(h.color.b*(1-r)+n.color.b*r)}):e=this.percentColors[s].color;break}return"rgb("+[e.r,e.g,e.b].join(",")+")"},i.prototype.getColorForValue=function(t,i){var e;return e=(t-this.minValue)/(this.maxValue-this.minValue),this.getColorForPercentage(e,i)},i.prototype.renderStaticLabels=function(t,i,e,n){var s,o,r,a,h,l,c,u,p,d;for(this.ctx.save(),this.ctx.translate(i,e),l=/\d+\.?\d?/,h=(s=t.font||"10px Times").match(l)[0],u=s.slice(h.length),o=parseFloat(h)*this.displayScale,this.ctx.font=o+u,this.ctx.fillStyle=t.color||"#000000",this.ctx.textBaseline="bottom",this.ctx.textAlign="center",r=0,a=(c=t.labels).length;r<a;r++)void 0!==(d=c[r]).label?(!this.options.limitMin||d>=this.minValue)&&(!this.options.limitMax||d<=this.maxValue)&&(h=(s=d.font||t.font).match(l)[0],u=s.slice(h.length),o=parseFloat(h)*this.displayScale,this.ctx.font=o+u,p=this.getAngle(d.label)-3*Math.PI/2,this.ctx.rotate(p),this.ctx.fillText(f(d.label,t.fractionDigits),0,-n-this.lineWidth/2),this.ctx.rotate(-p)):(!this.options.limitMin||d>=this.minValue)&&(!this.options.limitMax||d<=this.maxValue)&&(p=this.getAngle(d)-3*Math.PI/2,this.ctx.rotate(p),this.ctx.fillText(f(d,t.fractionDigits),0,-n-this.lineWidth/2),this.ctx.rotate(-p));return this.ctx.restore()},i.prototype.renderTicks=function(t,i,e,n){var s,o,r,a,h,l,c,u,p,d,f,g,m,v,x,y,w,b,S,V;if(t!=={}){for(l=t.divisions||0,b=t.subDivisions||0,r=t.divColor||"#fff",v=t.subColor||"#fff",a=t.divLength||.7,y=t.subLength||.2,p=parseFloat(this.maxValue)-parseFloat(this.minValue),d=parseFloat(p)/parseFloat(t.divisions),x=parseFloat(d)/parseFloat(t.subDivisions),s=parseFloat(this.minValue),o=0+x,h=(u=p/400)*(t.divWidth||1),w=u*(t.subWidth||1),g=[],S=c=0,f=l+1;c<f;S=c+=1)this.ctx.lineWidth=this.lineWidth*a,m=this.lineWidth/2*(1-a),V=this.radius*this.options.radiusScale+m,this.ctx.strokeStyle=r,this.ctx.beginPath(),this.ctx.arc(0,0,V,this.getAngle(s-h),this.getAngle(s+h),!1),this.ctx.stroke(),o=s+x,s+=d,S!==t.divisions&&b>0?g.push(function(){var t,i,e;for(e=[],t=0,i=b-1;t<i;t+=1)this.ctx.lineWidth=this.lineWidth*y,m=this.lineWidth/2*(1-y),V=this.radius*this.options.radiusScale+m,this.ctx.strokeStyle=v,this.ctx.beginPath(),this.ctx.arc(0,0,V,this.getAngle(o-w),this.getAngle(o+w),!1),this.ctx.stroke(),e.push(o+=x);return e}.call(this)):g.push(void 0);return g}},i.prototype.render=function(){var t,i,e,n,s,o,r,a,h,l,c,u,p,d,f,g;if(f=this.canvas.width/2,e=this.canvas.height*this.paddingTop+this.availableHeight-(this.radius+this.lineWidth/2)*this.extraPadding,t=this.getAngle(this.displayedValue),this.textField&&this.textField.render(this),this.ctx.lineCap="butt",l=this.radius*this.options.radiusScale,this.options.staticLabels&&this.renderStaticLabels(this.options.staticLabels,f,e,l),this.options.staticZones)for(this.ctx.save(),this.ctx.translate(f,e),this.ctx.lineWidth=this.lineWidth,n=0,o=(c=this.options.staticZones).length;n<o;n++)h=(g=c[n]).min,this.options.limitMin&&h<this.minValue&&(h=this.minValue),a=g.max,this.options.limitMax&&a>this.maxValue&&(a=this.maxValue),d=this.radius*this.options.radiusScale,g.height&&(this.ctx.lineWidth=this.lineWidth*g.height,p=this.lineWidth/2*(g.offset||1-g.height),d=this.radius*this.options.radiusScale+p),this.ctx.strokeStyle=g.strokeStyle,this.ctx.beginPath(),this.ctx.arc(0,0,d,this.getAngle(h),this.getAngle(a),!1),this.ctx.stroke();else void 0!==this.options.customFillStyle?i=this.options.customFillStyle(this):null!==this.percentColors?i=this.getColorForValue(this.displayedValue,this.options.generateGradient):void 0!==this.options.colorStop?((i=0===this.options.gradientType?this.ctx.createRadialGradient(f,e,9,f,e,70):this.ctx.createLinearGradient(0,0,f,0)).addColorStop(0,this.options.colorStart),i.addColorStop(1,this.options.colorStop)):i=this.options.colorStart,this.ctx.strokeStyle=i,this.ctx.beginPath(),this.ctx.arc(f,e,l,(1+this.options.angle)*Math.PI,t,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.stroke(),this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(f,e,l,t,(2-this.options.angle)*Math.PI,!1),this.ctx.stroke(),this.ctx.save(),this.ctx.translate(f,e);for(this.options.renderTicks&&this.renderTicks(this.options.renderTicks,f,e,l),this.ctx.restore(),this.ctx.translate(f,e),s=0,r=(u=this.gp).length;s<r;s++)u[s].update(!0);return this.ctx.translate(-f,-e)},i}(),o=function(t){function i(t){this.canvas=t,i.__super__.constructor.call(this),"undefined"!=typeof G_vmlCanvasManager&&(this.canvas=window.G_vmlCanvasManager.initElement(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.setOptions(),this.render()}return y(i,r),i.prototype.lineWidth=15,i.prototype.displayedValue=0,i.prototype.value=33,i.prototype.maxValue=80,i.prototype.minValue=0,i.prototype.options={lineWidth:.1,colorStart:"#6f6ea0",colorStop:"#c0c0db",strokeColor:"#eeeeee",shadowColor:"#d5d5d5",angle:.35,radiusScale:1},i.prototype.getAngle=function(t){return(1-this.options.angle)*Math.PI+(t-this.minValue)/(this.maxValue-this.minValue)*(2+this.options.angle-(1-this.options.angle))*Math.PI},i.prototype.setOptions=function(t){return null==t&&(t=null),i.__super__.setOptions.call(this,t),this.lineWidth=this.canvas.height*this.options.lineWidth,this.radius=this.options.radiusScale*(this.canvas.height/2-this.lineWidth/2),this},i.prototype.set=function(t){return this.value=this.parseValue(t),this.value>this.maxValue?this.options.limitMax?this.value=this.maxValue:this.maxValue=this.value:this.value<this.minValue&&(this.options.limitMin?this.value=this.minValue:this.minValue=this.value),AnimationUpdater.run(this.forceUpdate),this.forceUpdate=!1},i.prototype.render=function(){var t,i,e,n;return t=this.getAngle(this.displayedValue),n=this.canvas.width/2,e=this.canvas.height/2,this.textField&&this.textField.render(this),(i=this.ctx.createRadialGradient(n,e,39,n,e,70)).addColorStop(0,this.options.colorStart),i.addColorStop(1,this.options.colorStop),this.radius-this.lineWidth/2,this.radius+this.lineWidth/2,this.ctx.strokeStyle=this.options.strokeColor,this.ctx.beginPath(),this.ctx.arc(n,e,this.radius,(1-this.options.angle)*Math.PI,(2+this.options.angle)*Math.PI,!1),this.ctx.lineWidth=this.lineWidth,this.ctx.lineCap="round",this.ctx.stroke(),this.ctx.strokeStyle=i,this.ctx.beginPath(),this.ctx.arc(n,e,this.radius,(1-this.options.angle)*Math.PI,t,!1),this.ctx.stroke()},i}(),a=function(t){function i(){return i.__super__.constructor.apply(this,arguments)}return y(i,o),i.prototype.strokeGradient=function(t,i,e,n){var s;return(s=this.ctx.createRadialGradient(t,i,e,t,i,n)).addColorStop(0,this.options.shadowColor),s.addColorStop(.12,this.options._orgStrokeColor),s.addColorStop(.88,this.options._orgStrokeColor),s.addColorStop(1,this.options.shadowColor),s},i.prototype.setOptions=function(t){var e,n,s,o;return null==t&&(t=null),i.__super__.setOptions.call(this,t),o=this.canvas.width/2,e=this.canvas.height/2,n=this.radius-this.lineWidth/2,s=this.radius+this.lineWidth/2,this.options._orgStrokeColor=this.options.strokeColor,this.options.strokeColor=this.strokeGradient(o,e,n,s),this},i}(),window.AnimationUpdater={elements:[],animId:null,addAll:function(t){var i,e,n,s;for(s=[],e=0,n=t.length;e<n;e++)i=t[e],s.push(AnimationUpdater.elements.push(i));return s},add:function(t){return AnimationUpdater.elements.push(t)},run:function(t){var i,e,n,s;if(null==t&&(t=!1),isFinite(parseFloat(t))||!0===t){for(i=!0,e=0,n=(s=AnimationUpdater.elements).length;e<n;e++)s[e].update(!0===t)&&(i=!1);return AnimationUpdater.animId=i?null:requestAnimationFrame(AnimationUpdater.run)}if(!1===t)return!0===AnimationUpdater.animId&&cancelAnimationFrame(AnimationUpdater.animId),AnimationUpdater.animId=requestAnimationFrame(AnimationUpdater.run)}},"function"==typeof window.define&&null!=window.define.amd?void 0===(n=function(){return{Gauge:h,Donut:a,BaseDonut:o,TextRenderer:c}}.call(i,e,i,t))||(t.exports=n):null!=t.exports?t.exports={Gauge:h,Donut:a,BaseDonut:o,TextRenderer:c}:(window.Gauge=h,window.Donut=a,window.BaseDonut=o,window.TextRenderer=c)}).call(this)},function(t,i,e){"use strict";e.r(i);e(2);var n=e(0),s=document.getElementById("g1"),o=new n.Gauge(s).setOptions({angle:0,lineWidth:.3,pointer:{length:0,strokeWidth:0},colorStart:"#6FADCF",colorStop:"#e2534b",strokeColor:"#76c7c0"});o.maxValue=100,o.setMinValue(0),o.set(50)},function(t,i,e){var n=e(3);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(4)(n,s);n.locals&&(t.exports=n.locals)},function(t,i,e){},function(t,i,e){var n,s,o={},r=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===s&&(s=n.apply(this,arguments)),s}),a=function(t){var i={};return function(t,e){if("function"==typeof t)return t();if(void 0===i[t]){var n=function(t,i){return i?i.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}i[t]=n}return i[t]}}(),h=null,l=0,c=[],u=e(5);function p(t,i){for(var e=0;e<t.length;e++){var n=t[e],s=o[n.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](n.parts[r]);for(;r<n.parts.length;r++)s.parts.push(x(n.parts[r],i))}else{var a=[];for(r=0;r<n.parts.length;r++)a.push(x(n.parts[r],i));o[n.id]={id:n.id,refs:1,parts:a}}}}function d(t,i){for(var e=[],n={},s=0;s<t.length;s++){var o=t[s],r=i.base?o[0]+i.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};n[r]?n[r].parts.push(a):e.push(n[r]={id:r,parts:[a]})}return e}function f(t,i){var e=a(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=c[c.length-1];if("top"===t.insertAt)n?n.nextSibling?e.insertBefore(i,n.nextSibling):e.appendChild(i):e.insertBefore(i,e.firstChild),c.push(i);else if("bottom"===t.insertAt)e.appendChild(i);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var s=a(t.insertAt.before,e);e.insertBefore(i,s)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var i=c.indexOf(t);i>=0&&c.splice(i,1)}function m(t){var i=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return e.nc}();n&&(t.attrs.nonce=n)}return v(i,t.attrs),f(t,i),i}function v(t,i){Object.keys(i).forEach(function(e){t.setAttribute(e,i[e])})}function x(t,i){var e,n,s,o;if(i.transform&&t.css){if(!(o="function"==typeof i.transform?i.transform(t.css):i.transform.default(t.css)))return function(){};t.css=o}if(i.singleton){var r=l++;e=h||(h=m(i)),n=b.bind(null,e,r,!1),s=b.bind(null,e,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var i=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(i,t.attrs),f(t,i),i}(i),n=function(t,i,e){var n=e.css,s=e.sourceMap,o=void 0===i.convertToAbsoluteUrls&&s;(i.convertToAbsoluteUrls||o)&&(n=u(n));s&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var r=new Blob([n],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}.bind(null,e,i),s=function(){g(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(i),n=function(t,i){var e=i.css,n=i.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),s=function(){g(e)});return n(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;n(t=i)}else s()}}t.exports=function(t,i){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(i=i||{}).attrs="object"==typeof i.attrs?i.attrs:{},i.singleton||"boolean"==typeof i.singleton||(i.singleton=r()),i.insertInto||(i.insertInto="head"),i.insertAt||(i.insertAt="bottom");var e=d(t,i);return p(e,i),function(t){for(var n=[],s=0;s<e.length;s++){var r=e[s];(a=o[r.id]).refs--,n.push(a)}t&&p(d(t,i),i);for(s=0;s<n.length;s++){var a;if(0===(a=n[s]).refs){for(var h=0;h<a.parts.length;h++)a.parts[h]();delete o[a.id]}}}};var y,w=(y=[],function(t,i){return y[t]=i,y.filter(Boolean).join("\n")});function b(t,i,e,n){var s=e?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(i,s);else{var o=document.createTextNode(s),r=t.childNodes;r[i]&&t.removeChild(r[i]),r.length?t.insertBefore(o,r[i]):t.appendChild(o)}}},function(t,i){t.exports=function(t){var i="undefined"!=typeof window&&window.location;if(!i)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=i.protocol+"//"+i.host,n=e+i.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,i){var s,o=i.trim().replace(/^"(.*)"$/,function(t,i){return i}).replace(/^'(.*)'$/,function(t,i){return i});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(s=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(s)+")")})}}]);