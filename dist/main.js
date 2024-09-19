(()=>{"use strict";var e={807:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RandomZnaci=void 0;var r=function(){function e(){this.brojevi=[-1,-1,-1,-1];for(var e=0;e<4;e++)this.brojevi[e]=Math.floor(6*Math.random())}return e.prototype.pokusaj=function(e){for(var t=!0,r=0;r<4;r++)e[r]!=this.brojevi[r]&&(t=!1);return t},e.prototype.dajBoje=function(e){for(var t=[0,0],r=[!1,!1,!1,!1],a=[0,0,0,0,0,0],o=0;o<4;o++)a[this.brojevi[o]]++;for(o=0;o<4;o++)e[o]==this.brojevi[o]&&(a[e[o]]--,r[o]=!0,t[0]++);for(o=0;o<4;o++)a[e[o]]>0&&!1===r[o]&&(a[e[o]]--,t[1]++);return t},e}();t.RandomZnaci=r},462:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var a=r(807),o=function(){function e(){this.currRow=0,this.kombinacija=new a.RandomZnaci}return e.prototype.generateMap=function(e){for(var t=this,r=0;r<6;r++){var a=document.createElement("div");a.classList.add("horizontalno");var o=document.createElement("div");o.classList.add("redLevo"),o.classList.add("red".concat(r));var s=document.createElement("div");s.classList.add("redDesno"),s.classList.add("red".concat(r));for(var n=function(e){var r=document.createElement("img");r.src="",r.classList.add("polje"),r.addEventListener("click",(function(){t.obrisi(r)})),o.appendChild(r),a.appendChild(o);var n=document.createElement("div");n.classList.add("guess"),n.style.backgroundColor="gray",s.appendChild(n),a.appendChild(s)},c=0;c<4;c++)n();e.appendChild(a)}var d=document.createElement("div");d.classList.add("znakovi");var i=function(e){var r=document.createElement("img");switch(r.classList.add("znak"),r.classList.add("".concat(e)),e){case 0:r.src="../assets/skocko.png";break;case 1:r.src="../assets/tref.png";break;case 2:r.src="../assets/pik.png";break;case 3:r.src="../assets/herc.png";break;case 4:r.src="../assets/karo.png";break;case 5:r.src="../assets/zvezda.png"}r.addEventListener("click",(function(){t.dodaj(r)})),d.appendChild(r)};for(r=0;r<6;r++)i(r);e.appendChild(d);var l=document.createElement("div");l.classList.add("btnContainer");var u=document.createElement("button");u.classList.add("dugme"),u.textContent="POGODI",u.addEventListener("click",(function(){t.pogadjaj()})),l.appendChild(u);var p=document.createElement("button");p.classList.add("dugme"),p.textContent="Nova Igra",p.addEventListener("click",(function(){t.reset()})),l.appendChild(p),e.appendChild(l)},e.prototype.dodaj=function(e){e.firstChild;for(var t=document.querySelector(".redLevo.red".concat(this.currRow)).children,r=0;r<t.length;r++)if(""==t[r].getAttribute("src")){t[r].setAttribute("src",e.src),t[r].setAttribute("class",e.className.split(" ")[1]);break}},e.prototype.pogadjaj=function(){for(var e=!1,t=[],r=document.querySelector(".redLevo.red".concat(this.currRow)).children,a=0;a<r.length;a++){if(""==r[a].getAttribute("src")){e=!0,t=[];break}t.push(parseInt(r[a].className.split(" ")[0]))}e||(this.kombinacija.pokusaj(t)?(this.oboji(t),alert("Pobeda!!!"),this.currRow=-1):(this.oboji(t),this.currRow++))},e.prototype.oboji=function(e){var t;t=this.kombinacija.dajBoje(e);for(var r=document.querySelector(".redDesno.red".concat(this.currRow)).children,a=0,o=0;o<r.length;o++)"background-color: gray;"==r[a].getAttribute("style")&&t[0]>0?(r[a++].setAttribute("style","background-color: red;"),t[0]--):t[1]>0&&"background-color: gray;"==r[a].getAttribute("style")&&(r[a++].setAttribute("style","background-color: yellow;"),t[1]--)},e.prototype.reset=function(){this.currRow=0,this.kombinacija=new a.RandomZnaci;var e=0;document.querySelectorAll(".redLevo>*").forEach((function(t){t.className="",t.classList.add("polje"),t.classList.add("polje".concat(e%4)),t.setAttribute("src","")})),e=0,document.querySelectorAll(".redDesno>*").forEach((function(e){e.setAttribute("style","background-color: gray;")}))},e.prototype.obrisi=function(e){e.parentElement.classList.contains("red".concat(this.currRow))&&(e.className="",e.classList.add("polje"),e.setAttribute("src",""))},e.prototype.generateTimer=function(e){var t=document.createElement("div");t.classList.add("drugiCont"),t.textContent="60",e.appendChild(t);for(var r=0;r<2;r++){var a=document.createElement("div");a.classList.add("polukrug"),a.classList.add("pkb");var o=document.createElement("div");o.classList.add("polukrug"),o.classList.add("pkp"),o.style.zIndex="5",a.style.zIndex="5",1==r&&(a.style.transform="rotate(180deg)",a.style.zIndex="3",o.style.transform="rotate(180deg)",o.style.zIndex="3"),t.appendChild(a),t.appendChild(o)}e.appendChild(t)},e}();t.default=o}},t={};(new(function r(a){var o=t[a];if(void 0!==o)return o.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,r),s.exports}(462).default)).generateMap(document.body)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akJELEVBQ0gsT0FBT0EsRUFBYUUsUUFHckIsSUFBSUMsRUFBU04sRUFBeUJFLEdBQVksQ0FHakRHLFFBQVMsQ0FBQyxHQU9YLE9BSEFFLEVBQW9CTCxHQUFVSSxFQUFRQSxFQUFPRCxRQUFTSixHQUcvQ0ssRUFBT0QsT0FDZixDQ3RCQSxNQUdXLFVBRVQ5RCxZQUFZRyxTQUFTOEQsSyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nrb2Nrby8uL3NyYy9sb2dpa2EudHMiLCJ3ZWJwYWNrOi8vc2tvY2tvLy4vc3JjL21hcC50cyIsIndlYnBhY2s6Ly9za29ja28vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2tvY2tvLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGNsYXNzIFJhbmRvbVpuYWNpe1xyXG4gICAgYnJvamV2aTpudW1iZXJbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuYnJvamV2aT1bLTEsLTEsLTEsLTFdO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8NDtpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmJyb2pldmlbaV09TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjYpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuYnJvamV2aVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHBva3VzYWoobml6Om51bWJlcltdKXtcclxuICAgICAgICBsZXQgdnJlZG5vc3Q6Ym9vbGVhbj10cnVlO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8NDtpKyspe1xyXG4gICAgICAgICAgICBpZihuaXpbaV0hPXRoaXMuYnJvamV2aVtpXSlcclxuICAgICAgICAgICAgICAgIHZyZWRub3N0PWZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdnJlZG5vc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZGFqQm9qZShuaXo6bnVtYmVyW10pOm51bWJlcltde1xyXG5cclxuICAgICAgICBsZXQga29uYWNuaU5pej1bMCwwXTsgLy8gdGFjbm8sIHBvc3RvamkgbmEgbG9zZSBtZXN0b1xyXG4gICAgICAgIGxldCBwb21vY25pTml6PVtmYWxzZSxmYWxzZSxmYWxzZSxmYWxzZV07XHJcbiAgICAgICAgbGV0IGJvamVNYXBhOm51bWJlcltdPVswLDAsMCwwLDAsMF07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8NDtpKyspXHJcbiAgICAgICAgICAgIGJvamVNYXBhW3RoaXMuYnJvamV2aVtpXV0rKztcclxuICAgICAgICBcclxuICAgICAgICBmb3IobGV0IGk9MDtpPDQ7aSsrKXtcclxuICAgICAgICAgICAgaWYobml6W2ldPT10aGlzLmJyb2pldmlbaV0pXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9qZU1hcGFbbml6W2ldXS0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvbW9jbmlOaXpbaV09dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBrb25hY25pTml6WzBdKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8NDtpKyspe1xyXG4gICAgICAgICAgICBpZihib2plTWFwYVtuaXpbaV1dPjAgJiYgcG9tb2NuaU5peltpXT09PWZhbHNlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvamVNYXBhW25peltpXV0tLTtcclxuICAgICAgICAgICAgICAgICAgICBrb25hY25pTml6WzFdKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ga29uYWNuaU5pejtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFJhbmRvbVpuYWNpIH0gZnJvbSBcIi4vbG9naWthXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1le1xyXG4gICAgY3VyclJvdzogbnVtYmVyO1xyXG4gICAga29tYmluYWNpamE6YW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5jdXJyUm93PTA7XHJcbiAgICAgICAgdGhpcy5rb21iaW5hY2lqYT1uZXcgUmFuZG9tWm5hY2koKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMua29tYmluYWNpamEuYnJvamV2aSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVNYXAoY29udGFpbmVyOkhUTUxFbGVtZW50KXtcclxuXHJcbiAgICAgICAgLy90aGlzLmdlbmVyYXRlVGltZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTw2O2krKyl7XHJcbiAgICAgICAgICAgIGxldCByZWQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgcmVkLmNsYXNzTGlzdC5hZGQoXCJob3Jpem9udGFsbm9cIik7XHJcbiAgICBcclxuICAgICAgICAgICAgbGV0IHJlZExldm89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHJlZExldm8uY2xhc3NMaXN0LmFkZCgncmVkTGV2bycpO1xyXG4gICAgICAgICAgICByZWRMZXZvLmNsYXNzTGlzdC5hZGQoYHJlZCR7aX1gKTtcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgcmVkRGVzbm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgcmVkRGVzbm8uY2xhc3NMaXN0LmFkZCgncmVkRGVzbm8nKTtcclxuICAgICAgICAgICAgcmVkRGVzbm8uY2xhc3NMaXN0LmFkZChgcmVkJHtpfWApO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGZvcihsZXQgaj0wO2o8NDtqKyspe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9samVTbGlrYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgICAgIC8vbGV0IHBvbGplPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgcG9samVTbGlrYS5zcmM9XCJcIjtcclxuICAgICAgICAgICAgICAgIC8vcG9samVTbGlrYS5hbHQ9XCJcIjtcclxuICAgICAgICAgICAgICAgIC8vcG9samVTbGlrYS5vbmVycm9yPWZ1bmN0aW9uKCl7dGhpcy5zdHlsZS5kaXNwbGF5PSdub25lJzt9O1xyXG4gICAgICAgICAgICAgICAgcG9samVTbGlrYS5jbGFzc0xpc3QuYWRkKFwicG9samVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9vdm9cclxuICAgICAgICAgICAgICAgIC8vcG9samVTbGlrYS5jbGFzc0xpc3QuYWRkKGBwb2xqZSR7an1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwb2xqZVNsaWthLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e3RoaXMub2JyaXNpKHBvbGplU2xpa2EpO30pO1xyXG4gICAgICAgICAgICAgICAgLy9wb2xqZS5hcHBlbmRDaGlsZChwb2xqZVNsaWthKTtcclxuICAgICAgICAgICAgICAgIHJlZExldm8uYXBwZW5kQ2hpbGQocG9samVTbGlrYSk7XHJcbiAgICAgICAgICAgICAgICByZWQuYXBwZW5kQ2hpbGQocmVkTGV2byk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IGd1ZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBndWVzcy5jbGFzc0xpc3QuYWRkKFwiZ3Vlc3NcIik7XHJcbiAgICAgICAgICAgICAgICBndWVzcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3I9IFwiZ3JheVwiO1xyXG4gICAgICAgICAgICAgICAgcmVkRGVzbm8uYXBwZW5kQ2hpbGQoZ3Vlc3MpO1xyXG4gICAgICAgICAgICAgICAgcmVkLmFwcGVuZENoaWxkKHJlZERlc25vKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWQpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGxldCB6bmFrb3ZpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHpuYWtvdmkuY2xhc3NMaXN0LmFkZChcInpuYWtvdmlcIik7XHJcbiAgICBcclxuICAgICAgICBmb3IobGV0IGk9MDtpPDY7aSsrKXtcclxuICAgICAgICAgICAgLy9sZXQgem5hazpIVE1MRGl2RWxlbWVudD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIGxldCBpbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnem5haycpO1xyXG4gICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKGAke2l9YCk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2goaSl7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGltYWdlLnNyYz0nLi4vYXNzZXRzL3Nrb2Nrby5wbmcnOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMTogaW1hZ2Uuc3JjPScuLi9hc3NldHMvdHJlZi5wbmcnOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMjogaW1hZ2Uuc3JjPScuLi9hc3NldHMvcGlrLnBuZyc7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOiBpbWFnZS5zcmM9Jy4uL2Fzc2V0cy9oZXJjLnBuZyc7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBpbWFnZS5zcmM9Jy4uL2Fzc2V0cy9rYXJvLnBuZyc7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBpbWFnZS5zcmM9Jy4uL2Fzc2V0cy96dmV6ZGEucG5nJzsgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9Pnt0aGlzLmRvZGFqKGltYWdlKTt9KTtcclxuICAgICAgICAgICAgem5ha292aS5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh6bmFrb3ZpKTtcclxuICAgIFxyXG4gICAgICAgIGxldCBidG5Db250YWluZXI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J0bkNvbnRhaW5lcicpO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IFBvZ2FkamFqPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIFBvZ2FkamFqLmNsYXNzTGlzdC5hZGQoJ2R1Z21lJyk7XHJcbiAgICAgICAgUG9nYWRqYWoudGV4dENvbnRlbnQ9XCJQT0dPRElcIjtcclxuICAgICAgICBQb2dhZGphai5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e3RoaXMucG9nYWRqYWooKTt9KTtcclxuICAgICAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoUG9nYWRqYWopO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IG5vdmFJZ3JhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIG5vdmFJZ3JhLmNsYXNzTGlzdC5hZGQoJ2R1Z21lJyk7XHJcbiAgICAgICAgbm92YUlncmEudGV4dENvbnRlbnQ9XCJOb3ZhIElncmFcIjtcclxuICAgICAgICBub3ZhSWdyYS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e3RoaXMucmVzZXQoKTt9KTtcclxuICAgICAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQobm92YUlncmEpO1xyXG4gICAgXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICBkb2RhaihlbDpIVE1MSW1hZ2VFbGVtZW50KTp2b2lke1xyXG4gICAgICAgIGxldCBzbGlrYT1lbC5maXJzdENoaWxkO1xyXG5cclxuICAgICAgICBsZXQgdHJlblJlZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucmVkTGV2by5yZWQke3RoaXMuY3VyclJvd31gKS5jaGlsZHJlbjtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGAucmVkTGV2by5yZWQke3RoaXMuY3VyclJvd31gKTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpPHRyZW5SZWQubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKHRyZW5SZWRbaV0uZ2V0QXR0cmlidXRlKCdzcmMnKT09XCJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHJlblJlZFtpXS5zZXRBdHRyaWJ1dGUoJ3NyYycsZWwuc3JjKTtcclxuICAgICAgICAgICAgICAgIHRyZW5SZWRbaV0uc2V0QXR0cmlidXRlKCdjbGFzcycsZWwuY2xhc3NOYW1lLnNwbGl0KCcgJylbMV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcG9nYWRqYWooKTp2b2lke1xyXG4gICAgICAgIGxldCBjaGVja2VyOmJvb2xlYW49ZmFsc2U7XHJcbiAgICAgICAgbGV0IG5pejpudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGxldCB0cmVudXRuaVJlZD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucmVkTGV2by5yZWQke3RoaXMuY3VyclJvd31gKS5jaGlsZHJlbjtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCk7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0cmVudXRuaVJlZC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYodHJlbnV0bmlSZWRbaV0uZ2V0QXR0cmlidXRlKCdzcmMnKT09XCJcIilcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2hlY2tlcj10cnVlO1xyXG4gICAgICAgICAgICAgICAgbml6PVtdO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIG5pei5wdXNoKHBhcnNlSW50KHRyZW51dG5pUmVkW2ldLmNsYXNzTmFtZS5zcGxpdCgnICcpWzBdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhuaXopO1xyXG4gICAgICAgIGlmKCFjaGVja2VyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5rb21iaW5hY2lqYS5wb2t1c2FqKG5peikpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYm9qaShuaXopO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUG9iZWRhISEhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyclJvdz0tMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMub2Jvamkobml6KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyclJvdysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvYm9qaShuaXo6bnVtYmVyW10pe1xyXG4gICAgICAgIGxldCBuaXpCb2phOm51bWJlcltdO1xyXG4gICAgICAgIG5pekJvamE9IHRoaXMua29tYmluYWNpamEuZGFqQm9qZShuaXopO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJrb21iaW5hY2lqYSBqZSBcIiArIHRoaXMua29tYmluYWNpamEuYnJvamV2aSk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhuaXpCb2phKTtcclxuXHJcbiAgICAgICAgbGV0IGd1ZXNzUmVkPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5yZWREZXNuby5yZWQke3RoaXMuY3VyclJvd31gKS5jaGlsZHJlbjtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGd1ZXNzUmVkKTtcclxuICAgICAgICBsZXQgY29sb3JDb3VudGVyPTA7XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxndWVzc1JlZC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYoZ3Vlc3NSZWRbY29sb3JDb3VudGVyXS5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk9PVwiYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcIiAmJiBuaXpCb2phWzBdPjApe1xyXG4gICAgICAgICAgICAgICAgZ3Vlc3NSZWRbY29sb3JDb3VudGVyKytdLnNldEF0dHJpYnV0ZSgnc3R5bGUnLFwiYmFja2dyb3VuZC1jb2xvcjogcmVkO1wiKTtcclxuICAgICAgICAgICAgICAgIG5pekJvamFbMF0tLTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKG5pekJvamFbMV0+MCAmJiBndWVzc1JlZFtjb2xvckNvdW50ZXJdLmdldEF0dHJpYnV0ZSgnc3R5bGUnKT09XCJiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1wiKXtcclxuICAgICAgICAgICAgICAgIGd1ZXNzUmVkW2NvbG9yQ291bnRlcisrXS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxcImJhY2tncm91bmQtY29sb3I6IHllbGxvdztcIik7XHJcbiAgICAgICAgICAgICAgICBuaXpCb2phWzFdLS07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKXtcclxuICAgICAgICB0aGlzLmN1cnJSb3c9MDtcclxuICAgICAgICB0aGlzLmtvbWJpbmFjaWphPW5ldyBSYW5kb21abmFjaSgpO1xyXG4gICAgICAgIGxldCBpPTA7XHJcbiAgICAgICAgbGV0IHpuYWtvdmlQb2xqYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucmVkTGV2bz4qYCk7XHJcblxyXG4gICAgICAgIHpuYWtvdmlQb2xqYS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTmFtZT1cIlwiO1xyXG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJwb2xqZVwiKTtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBwb2xqZSR7aSU0fWApO1xyXG4gICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcInNyY1wiLFwiXCIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpPTA7XHJcbiAgICAgICAgbGV0IHpuYWtvdmlHdWVzcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAucmVkRGVzbm8+KmApO1xyXG4gICAgICAgIHpuYWtvdmlHdWVzcy5mb3JFYWNoKGVsZW1lbnQ9PntcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxcImJhY2tncm91bmQtY29sb3I6IGdyYXk7XCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9icmlzaShlbDpIVE1MSW1hZ2VFbGVtZW50KXtcclxuICAgICAgICBsZXQgcm9kaXRlbGo9ZWwucGFyZW50RWxlbWVudDtcclxuICAgICAgICBpZihyb2RpdGVsai5jbGFzc0xpc3QuY29udGFpbnMoYHJlZCR7dGhpcy5jdXJyUm93fWApKXtcclxuICAgICAgICAgICAgZWwuY2xhc3NOYW1lPVwiXCI7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJwb2xqZVwiKTtcclxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwic3JjXCIsXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coZWwucGFyZW50RWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdlbmVyYXRlVGltZXIoY29udGFpbmVyOkhUTUxFbGVtZW50KXtcclxuICAgICAgICBsZXQgZHJ1Z2lDb250PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkcnVnaUNvbnQuY2xhc3NMaXN0LmFkZChcImRydWdpQ29udFwiKTtcclxuICAgICAgICBkcnVnaUNvbnQudGV4dENvbnRlbnQ9XCI2MFwiO1xyXG5cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJ1Z2lDb250KTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTwyO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBiZWxpRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGJlbGlEaXYuY2xhc3NMaXN0LmFkZChgcG9sdWtydWdgKTtcclxuICAgICAgICAgICAgYmVsaURpdi5jbGFzc0xpc3QuYWRkKFwicGtiXCIpO1xyXG4gICAgICAgICAgICBsZXQgcGxhdmlEaXY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIHBsYXZpRGl2LmNsYXNzTGlzdC5hZGQoYHBvbHVrcnVnYCk7XHJcbiAgICAgICAgICAgIHBsYXZpRGl2LmNsYXNzTGlzdC5hZGQoXCJwa3BcIik7XHJcblxyXG5cclxuICAgICAgICAgICAgcGxhdmlEaXYuc3R5bGUuekluZGV4PVwiNVwiO1xyXG4gICAgICAgICAgICBiZWxpRGl2LnN0eWxlLnpJbmRleD1cIjVcIjtcclxuXHJcbiAgICAgICAgICAgIGlmKGk9PTEpe1xyXG4gICAgICAgICAgICAgICAgYmVsaURpdi5zdHlsZS50cmFuc2Zvcm09XCJyb3RhdGUoMTgwZGVnKVwiO1xyXG4gICAgICAgICAgICAgICAgYmVsaURpdi5zdHlsZS56SW5kZXg9XCIzXCI7XHJcbiAgICAgICAgICAgICAgICBwbGF2aURpdi5zdHlsZS50cmFuc2Zvcm09XCJyb3RhdGUoMTgwZGVnKVwiO1xyXG4gICAgICAgICAgICAgICAgcGxhdmlEaXYuc3R5bGUuekluZGV4PVwiM1wiO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkcnVnaUNvbnQuYXBwZW5kQ2hpbGQoYmVsaURpdik7XHJcbiAgICAgICAgICAgIGRydWdpQ29udC5hcHBlbmRDaGlsZChwbGF2aURpdik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcnVnaUNvbnQpO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuLypkYSBrb3Jpc3RpbSBoYXNoIG1hcHUgemEgcGFtY2VuamUgYnJvamV2YSBvZCAwLTUgaSBvbmRhIHBydmkgcHJvbGF6IGFrbyBlbGVtZW50IGl6XHJcbm5hc2VnIHBvZ2FkamFuamEgamVkbmFrIGVsZW1lbnR1IHNtYW5qdWplbW8sIGkgcHJ2byBwcm9sYXppbW8gdGFrbyBrcm96IG5peixvbmRhIGVsZW1lbnRpIGtvamkgbmlzdSBuYSBtZXN0b1xyXG5wcm9kamVtbyBkYSBwaXRhbW8gZGEgbGkgcG9zdG9qZSB1IGhhc2ggbWFwaSBkYSBiaSB6bmFsaSBkYSBwb3N0b2ppIGFsaSBuaWplIG5hIG1lc3R1XHJcbiovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCBHYW1lIGZyb20gJy4vbWFwJztcclxuXHJcblxyXG5sZXQgZz0gbmV3IEdhbWUoKTtcclxuXHJcbmcuZ2VuZXJhdGVNYXAoZG9jdW1lbnQuYm9keSk7XHJcbiJdLCJuYW1lcyI6WyJ0aGlzIiwiYnJvamV2aSIsImkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwb2t1c2FqIiwibml6IiwidnJlZG5vc3QiLCJkYWpCb2plIiwia29uYWNuaU5peiIsInBvbW9jbmlOaXoiLCJib2plTWFwYSIsIlJhbmRvbVpuYWNpIiwiY3VyclJvdyIsImtvbWJpbmFjaWphIiwiZ2VuZXJhdGVNYXAiLCJjb250YWluZXIiLCJyZWQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZWRMZXZvIiwicmVkRGVzbm8iLCJqIiwicG9samVTbGlrYSIsInNyYyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvYnJpc2kiLCJhcHBlbmRDaGlsZCIsImd1ZXNzIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ6bmFrb3ZpIiwiaW1hZ2UiLCJkb2RhaiIsImJ0bkNvbnRhaW5lciIsIlBvZ2FkamFqIiwidGV4dENvbnRlbnQiLCJwb2dhZGphaiIsIm5vdmFJZ3JhIiwicmVzZXQiLCJlbCIsImZpcnN0Q2hpbGQiLCJ0cmVuUmVkIiwicXVlcnlTZWxlY3RvciIsImNoaWxkcmVuIiwibGVuZ3RoIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiY2xhc3NOYW1lIiwic3BsaXQiLCJjaGVja2VyIiwidHJlbnV0bmlSZWQiLCJwdXNoIiwicGFyc2VJbnQiLCJvYm9qaSIsImFsZXJ0Iiwibml6Qm9qYSIsImd1ZXNzUmVkIiwiY29sb3JDb3VudGVyIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5zIiwiZ2VuZXJhdGVUaW1lciIsImRydWdpQ29udCIsImJlbGlEaXYiLCJwbGF2aURpdiIsInpJbmRleCIsInRyYW5zZm9ybSIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=