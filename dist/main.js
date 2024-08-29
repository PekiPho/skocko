(()=>{"use strict";function e(){}function t(){}document.querySelector(".gameContainer"),function(d){for(let e=0;e<6;e++){let t=document.createElement("div");t.classList.add("horizontalno");let a=document.createElement("div");a.classList.add("redLevo");let s=document.createElement("div");s.classList.add("redDesno");for(let d=0;d<4;d++){let d=document.createElement("div");d.classList.add("polje"),d.classList.add(`red${e}`),a.appendChild(d),t.appendChild(a);let n=document.createElement("div");n.classList.add("guess"),s.appendChild(n),t.appendChild(s)}d.appendChild(t)}let a=document.createElement("div");a.classList.add("znakovi");for(let e=0;e<6;e++){let t=document.createElement("div");t.classList.add("znak");let d=document.createElement("img");switch(e){case 0:d.src="../assets/skocko.png";break;case 1:d.src="../assets/tref.png";break;case 2:d.src="../assets/pik.png";break;case 3:d.src="../assets/herc.png";break;case 4:d.src="../assets/karo.png";break;case 5:d.src="../assets/zvezda.png"}t.appendChild(d),a.appendChild(t)}d.appendChild(a);let s=document.createElement("div");s.classList.add("btnContainer");let n=document.createElement("button");n.classList.add("dugme"),n.textContent="POGODI",n.addEventListener("click",e),s.appendChild(n);let c=document.createElement("button");c.classList.add("dugme"),c.textContent="Nova Igra",c.addEventListener("click",t),s.appendChild(c),d.appendChild(s)}(document.body)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBRU8sU0FBU0EsSUFFaEIsQ0FFTyxTQUFTLElBRWhCLENDTmtCQyxTQUFTQyxjQUFjLGtCQ1NsQyxTQUFxQkMsR0FDeEIsSUFBSSxJQUFJQyxFQUFFLEVBQUVBLEVBQUUsRUFBRUEsSUFBSSxDQUNoQixJQUFJQyxFQUFJSixTQUFTSyxjQUFjLE9BQy9CRCxFQUFJRSxVQUFVQyxJQUFJLGdCQUVsQixJQUFJQyxFQUFRUixTQUFTSyxjQUFjLE9BQ25DRyxFQUFRRixVQUFVQyxJQUFJLFdBRXRCLElBQUlFLEVBQVdULFNBQVNLLGNBQWMsT0FDdENJLEVBQVNILFVBQVVDLElBQUksWUFFdkIsSUFBSSxJQUFJRyxFQUFFLEVBQUVBLEVBQUUsRUFBRUEsSUFBSSxDQUVoQixJQUFJQyxFQUFNWCxTQUFTSyxjQUFjLE9BQ2pDTSxFQUFNTCxVQUFVQyxJQUFJLFNBQ3BCSSxFQUFNTCxVQUFVQyxJQUFJLE1BQU1KLEtBQzFCSyxFQUFRSSxZQUFZRCxHQUNwQlAsRUFBSVEsWUFBWUosR0FHaEIsSUFBSUssRUFBUWIsU0FBU0ssY0FBYyxPQUNuQ1EsRUFBTVAsVUFBVUMsSUFBSSxTQUNwQkUsRUFBU0csWUFBWUMsR0FDckJULEVBQUlRLFlBQVlILEVBRXBCLENBQ0FQLEVBQVVVLFlBQVlSLEVBQzFCLENBRUEsSUFBSVUsRUFBUWQsU0FBU0ssY0FBYyxPQUNuQ1MsRUFBUVIsVUFBVUMsSUFBSSxXQUV0QixJQUFJLElBQUlKLEVBQUUsRUFBRUEsRUFBRSxFQUFFQSxJQUFJLENBQ2hCLElBQUlZLEVBQUtmLFNBQVNLLGNBQWMsT0FDaENVLEVBQUtULFVBQVVDLElBQUksUUFFbkIsSUFBSVMsRUFBTWhCLFNBQVNLLGNBQWMsT0FFakMsT0FBT0YsR0FDSCxLQUFLLEVBQUdhLEVBQU1DLElBQUksdUJBQXdCLE1BQzFDLEtBQUssRUFBR0QsRUFBTUMsSUFBSSxxQkFBc0IsTUFDeEMsS0FBSyxFQUFHRCxFQUFNQyxJQUFJLG9CQUFxQixNQUN2QyxLQUFLLEVBQUdELEVBQU1DLElBQUkscUJBQXNCLE1BQ3hDLEtBQUssRUFBR0QsRUFBTUMsSUFBSSxxQkFBc0IsTUFDeEMsS0FBSyxFQUFHRCxFQUFNQyxJQUFJLHVCQUd0QkYsRUFBS0gsWUFBWUksR0FDakJGLEVBQVFGLFlBQVlHLEVBQ3hCLENBRUFiLEVBQVVVLFlBQVlFLEdBRXRCLElBQUlJLEVBQWFsQixTQUFTSyxjQUFjLE9BQ3hDYSxFQUFhWixVQUFVQyxJQUFJLGdCQUUzQixJQUFJWSxFQUFTbkIsU0FBU0ssY0FBYyxVQUNwQ2MsRUFBU2IsVUFBVUMsSUFBSSxTQUN2QlksRUFBU0MsWUFBWSxTQUNyQkQsRUFBU0UsaUJBQWlCLFFBQVF0QixHQUNsQ21CLEVBQWFOLFlBQVlPLEdBRXpCLElBQUlHLEVBQVN0QixTQUFTSyxjQUFjLFVBQ3BDaUIsRUFBU2hCLFVBQVVDLElBQUksU0FDdkJlLEVBQVNGLFlBQVksWUFDckJFLEVBQVNELGlCQUFpQixRQUFRLEdBQ2xDSCxFQUFhTixZQUFZVSxHQUV6QnBCLEVBQVVVLFlBQVlNLEVBRTFCLENEN0VBSyxDQUFZdkIsU0FBU3dCLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9za29ja28vLi9zcmMvbG9naWthLnRzIiwid2VicGFjazovL3Nrb2Nrby8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9za29ja28vLi9zcmMvbWFwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZnVuY3Rpb24gcG9nYWRqYWooKXtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXQoKXtcbiAgICBcbn0iLCJpbXBvcnQge2dlbmVyYXRlTWFwfSBmcm9tICcuL21hcC50cyc7XG5cbmxldCBnYW1lQ29udGFpbmVyPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZUNvbnRhaW5lclwiKTtcblxuZ2VuZXJhdGVNYXAoZG9jdW1lbnQuYm9keSk7XG4iLCIvLyBlbnVtIElncmF7XG4vLyAgICAgc2tvY2tvLFxuLy8gICAgIHRyZWYsXG4vLyAgICAgcGlrLFxuLy8gICAgIHNyY2UsXG4vLyAgICAga2Fybyxcbi8vICAgICB6dmV6ZGFcbi8vIH1cblxuaW1wb3J0IHtwb2dhZGphaixyZXNldH0gZnJvbSAnLi9sb2dpa2EudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVNYXAoY29udGFpbmVyKXtcbiAgICBmb3IobGV0IGk9MDtpPDY7aSsrKXtcbiAgICAgICAgbGV0IHJlZD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByZWQuY2xhc3NMaXN0LmFkZChcImhvcml6b250YWxub1wiKTtcblxuICAgICAgICBsZXQgcmVkTGV2bz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmVkTGV2by5jbGFzc0xpc3QuYWRkKCdyZWRMZXZvJyk7XG5cbiAgICAgICAgbGV0IHJlZERlc25vID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJlZERlc25vLmNsYXNzTGlzdC5hZGQoJ3JlZERlc25vJyk7XG5cbiAgICAgICAgZm9yKGxldCBqPTA7ajw0O2orKyl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBwb2xqZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHBvbGplLmNsYXNzTGlzdC5hZGQoXCJwb2xqZVwiKTtcbiAgICAgICAgICAgIHBvbGplLmNsYXNzTGlzdC5hZGQoYHJlZCR7aX1gKTtcbiAgICAgICAgICAgIHJlZExldm8uYXBwZW5kQ2hpbGQocG9samUpO1xuICAgICAgICAgICAgcmVkLmFwcGVuZENoaWxkKHJlZExldm8pO1xuXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBndWVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZ3Vlc3MuY2xhc3NMaXN0LmFkZChcImd1ZXNzXCIpO1xuICAgICAgICAgICAgcmVkRGVzbm8uYXBwZW5kQ2hpbGQoZ3Vlc3MpO1xuICAgICAgICAgICAgcmVkLmFwcGVuZENoaWxkKHJlZERlc25vKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWQpO1xuICAgIH1cblxuICAgIGxldCB6bmFrb3ZpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHpuYWtvdmkuY2xhc3NMaXN0LmFkZChcInpuYWtvdmlcIik7XG5cbiAgICBmb3IobGV0IGk9MDtpPDY7aSsrKXtcbiAgICAgICAgbGV0IHpuYWs9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHpuYWsuY2xhc3NMaXN0LmFkZCgnem5haycpO1xuXG4gICAgICAgIGxldCBpbWFnZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgICAgICBzd2l0Y2goaSl7XG4gICAgICAgICAgICBjYXNlIDA6IGltYWdlLnNyYz0nLi4vYXNzZXRzL3Nrb2Nrby5wbmcnOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTogaW1hZ2Uuc3JjPScuLi9hc3NldHMvdHJlZi5wbmcnOyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjogaW1hZ2Uuc3JjPScuLi9hc3NldHMvcGlrLnBuZyc7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOiBpbWFnZS5zcmM9Jy4uL2Fzc2V0cy9oZXJjLnBuZyc7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OiBpbWFnZS5zcmM9Jy4uL2Fzc2V0cy9rYXJvLnBuZyc7IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OiBpbWFnZS5zcmM9Jy4uL2Fzc2V0cy96dmV6ZGEucG5nJzsgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB6bmFrLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgem5ha292aS5hcHBlbmRDaGlsZCh6bmFrKTtcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoem5ha292aSk7XG5cbiAgICBsZXQgYnRuQ29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdidG5Db250YWluZXInKTtcblxuICAgIGxldCBQb2dhZGphaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBQb2dhZGphai5jbGFzc0xpc3QuYWRkKCdkdWdtZScpO1xuICAgIFBvZ2FkamFqLnRleHRDb250ZW50PVwiUE9HT0RJXCI7XG4gICAgUG9nYWRqYWouYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIscG9nYWRqYWopO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChQb2dhZGphaik7XG5cbiAgICBsZXQgbm92YUlncmE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbm92YUlncmEuY2xhc3NMaXN0LmFkZCgnZHVnbWUnKTtcbiAgICBub3ZhSWdyYS50ZXh0Q29udGVudD1cIk5vdmEgSWdyYVwiO1xuICAgIG5vdmFJZ3JhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHJlc2V0KTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQobm92YUlncmEpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG5cbn0iXSwibmFtZXMiOlsicG9nYWRqYWoiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250YWluZXIiLCJpIiwicmVkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlZExldm8iLCJyZWREZXNubyIsImoiLCJwb2xqZSIsImFwcGVuZENoaWxkIiwiZ3Vlc3MiLCJ6bmFrb3ZpIiwiem5hayIsImltYWdlIiwic3JjIiwiYnRuQ29udGFpbmVyIiwiUG9nYWRqYWoiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJub3ZhSWdyYSIsImdlbmVyYXRlTWFwIiwiYm9keSJdLCJzb3VyY2VSb290IjoiIn0=