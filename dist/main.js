(()=>{"use strict";const e=document.getElementById("content"),t=(e,t)=>{e.appendChild(t)},n=(n,s,a,c)=>{const i=(()=>{const e=document.createElement("div");return e.classList.add("container"),e})();t(e,i);const o=(()=>{const e=document.createElement("div");return e.classList.add("display"),e.classList.add("design"),e})();t(i,o);const d=(e=>{const t=document.createElement("div");return t.classList.add("upper"),t.innerHTML=e,t})(n);t(o,d);const r=((e,t)=>{const n=document.createElement("img");return n.src=e,n.setAttribute("id",t),n})(s,a);t(o,r);const l=(e=>{const t=document.createElement("div");return t.classList.add("lower"),t.innerHTML=e,t})(c);t(o,l)},s=()=>{n("Made with passion since 1977","images/chef.png","chef-pic","Order online or visit us")},a=()=>{(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("menu-container"),e.appendChild(t);const n=document.createElement("div");n.classList.add("menu-display"),n.classList.add("design"),t.appendChild(n);const s=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div");let r=[];r.push(s),r.push(a),r.push(c),r.push(i),r.push(o),r.push(d);for(let e=0;e<r.length;e++)r[e].setAttribute("id","menu-items"),n.appendChild(r[e]);for(let e=0;e<r.length;e++){const t=document.createElement("img"),n=document.createElement("div"),s=document.createElement("div"),a=["images/salsiccia.png","images/pomodoro.png","images/crema.png","images/gamberi.png","images/disgustoso.png","images/pepe.png"];t.src=a[e],t.setAttribute("id","pizza-pic");const c=["Salsiccia","Pomodoro","Crema","Gamberi","Disgustoso","Pepe"];n.innerHTML=c[e];const i=["Tomato sauce, Mozarella, Tomato, Basil, Pepperoni","Alfredo sauce, Feta Cheese, Tomato, Onions, Chili","Alfredo sauce, Mozarella, Shrimp, Salmon, Basil, Olives, Pineapple","Tomato sauce, Feta Cheese, Shrimp, Olives, Basil","Tomato sauce, Bacon, Pineapple, Basil, Olives","Alfredo sauce, Mozarella, Olives, Basil, Chilli Flakes"];s.innerHTML=i[e],s.classList.add("item-description"),r[e].appendChild(t),r[e].appendChild(n),r[e].appendChild(s)}})()};let c=document.getElementById("content");const i=()=>{c.removeChild(c.lastChild)};(()=>{const n=(()=>{const e=document.createElement("div");return e.classList.add("header"),e.classList.add("design"),e})();t(e,n);const s=(()=>{const e=document.createElement("div");return e.setAttribute("id","title"),e.innerHTML="Papas Pizza",e})();t(n,s);const a=(()=>{const e=document.createElement("div");e.classList.add("topnav");const n=document.createElement("button"),s=document.createElement("button"),a=document.createElement("button");return n.innerHTML="Home",n.href="#home",s.innerHTML="Menu",s.href="#menu",a.innerHTML="Contact",a.href="#contact",t(e,n),t(e,s),t(e,a),e})();t(n,a)})(),(()=>{const e=(()=>{const e=document.createElement("div");e.classList.add("footer"),e.classList.add("design"),e.innerHTML="Created by ";const n=document.createElement("a");return n.innerHTML="Kamilkhxn",n.href="https://github.com/KamilKhxn/kamils-pizza",n.target="_blank",t(e,n),e})();t(document.body,e)})(),s(),document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",(t=>{"Menu"===e.innerHTML&&(i(),a()),"Contact"===e.innerHTML&&(i(),n("📞  123-456-7890","images/cn-map.png","map-pic","290 Bremner Blvd, Toronto")),"Home"===e.innerHTML&&(i(),s())}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQVc4QyxFQUFpQkssSUdwRzVCSixHSHlIVyxNQUNYLE1BQU1XLEVBbERXLE1BQ2pCLE1BQU1BLEVBQVM1RCxTQUFTWSxjQUFjLE9BQ3RDZ0QsRUFBTy9DLFVBQVVDLElBQUksVUFDckI4QyxFQUFPL0MsVUFBVUMsSUFBSSxVQUNyQjhDLEVBQU94QyxVQUFZLGNBRW5CLE1BQU15QyxFQUFlN0QsU0FBU1ksY0FBYyxLQU81QyxPQU5BaUQsRUFBYXpDLFVBQVksWUFDekJ5QyxFQUFhSCxLQUFPLDRDQUNwQkcsRUFBYUMsT0FBUyxTQUV0QjVELEVBQVcwRCxFQUFRQyxHQUVaRCxHQXFDUUcsR0FDZjdELEVBQVdGLFNBQVNnRSxLQUFNSixJRzFIMUJBLEdBQ0FMLElBRUF2RCxTQUFTaUUsaUJBQWlCLFVBQVVDLFNBQVFDLElBQ3hDQSxFQUFLQyxpQkFBaUIsU0FBU0MsSUFDSixTQUFuQkYsRUFBSy9DLFlBQ0x5QixJQUNBVyxLQUVtQixZQUFuQlcsRUFBSy9DLFlBQ0x5QixJQ2ZaLEVBQW9CLG1CQUFvQixvQkFBcUIsVUFBVyw4QkRrQnpDLFNBQW5Cc0IsRUFBSy9DLFlBQ0x5QixJQUNBVSxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2FtaWxzLXBpenphLy4vc3JjL291dGxpbmUuanMiLCJ3ZWJwYWNrOi8va2FtaWxzLXBpenphLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8va2FtaWxzLXBpenphLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8va2FtaWxzLXBpenphLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2thbWlscy1waXp6YS8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBhcHBlbmRGdW5jID0gKHBhcmVudCwgY2hpbGQpID0+IHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xufVxuXG4vLyBoZWFkZXIgaGVscGVyIG1ldGhvZHNcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2lnbicpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmNvbnN0IGNyZWF0ZVRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnUGFwYXMgUGl6emEnO1xuICAgIHJldHVybiB0aXRsZTtcbn1cblxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCd0b3BuYXYnKTtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaG9tZS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgaG9tZS5ocmVmID0gJyNob21lJztcblxuICAgIG1lbnUuaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIG1lbnUuaHJlZiA9ICcjbWVudSc7XG5cbiAgICBjb250YWN0LmlubmVySFRNTCA9ICdDb250YWN0JztcbiAgICBjb250YWN0LmhyZWYgPSAnI2NvbnRhY3QnO1xuXG4gICAgYXBwZW5kRnVuYyhuYXYsIGhvbWUpO1xuICAgIGFwcGVuZEZ1bmMobmF2LCBtZW51KTtcbiAgICBhcHBlbmRGdW5jKG5hdiwgY29udGFjdCk7XG5cbiAgICByZXR1cm4gbmF2O1xufVxuXG4vLyBtYWluIGRpc3BsYXkgaGVscGVyIGZ1bmN0aW9uc1xuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBjcmVhdGVEaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICBkaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2Rlc2lnbicpO1xuICAgIHJldHVybiBkaXNwbGF5O1xufVxuXG5jb25zdCBjcmVhdGVVcHBlclRleHQgPSAodXBwZXJUZXh0KSA9PiB7XG4gICAgY29uc3Qgd29yZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3b3JkMS5jbGFzc0xpc3QuYWRkKCd1cHBlcicpO1xuICAgIHdvcmQxLmlubmVySFRNTCA9IHVwcGVyVGV4dDtcbiAgICByZXR1cm4gd29yZDE7XG59XG5jb25zdCBjcmVhdGVMb3dlclRleHQgPSAobG93ZXJUZXh0KSA9PiB7XG4gICAgY29uc3Qgd29yZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3b3JkMi5jbGFzc0xpc3QuYWRkKCdsb3dlcicpO1xuICAgIHdvcmQyLmlubmVySFRNTCA9IGxvd2VyVGV4dDtcbiAgICByZXR1cm4gd29yZDI7XG59XG5cbmNvbnN0IGNyZWF0ZUltZyA9IChpbWFnZVVybCwgaW1hZ2VJZCkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gaW1hZ2VVcmw7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW1hZ2VJZCk7XG4gICAgcmV0dXJuIGltYWdlO1xufVxuXG4vLyBmb290ZXIgaGVscGVyIG1ldGhvZFxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZGVzaWduJyk7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9ICdDcmVhdGVkIGJ5ICc7XG5cbiAgICBjb25zdCBhbmNob3JGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYW5jaG9yRm9vdGVyLmlubmVySFRNTCA9ICdLYW1pbGtoeG4nO1xuICAgIGFuY2hvckZvb3Rlci5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9LYW1pbEtoeG4va2FtaWxzLXBpenphJztcbiAgICBhbmNob3JGb290ZXIudGFyZ2V0ID0gJ19ibGFuayc7XG5cbiAgICBhcHBlbmRGdW5jKGZvb3RlciwgYW5jaG9yRm9vdGVyKTtcblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIC8vIGNyZWF0aW5nIHRoZSBoZWFkZXIgZGl2IFxuICAgIGNvbnN0IGhlYWRlckNvbnRhaW5lciA9IGNyZWF0ZUhlYWRlcigpO1xuICAgIGFwcGVuZEZ1bmMoY29udGVudCwgaGVhZGVyQ29udGFpbmVyKTtcblxuICAgIC8vIGNyZWF0aW5nIHRoZSB0aXRsZSBcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRpdGxlKCk7XG4gICAgYXBwZW5kRnVuYyhoZWFkZXJDb250YWluZXIsIHRpdGxlKTtcblxuICAgIC8vIGNyZWF0aW5nIG5hdmlnYXRpb24gYmFyXG4gICAgY29uc3QgbmF2aWdhdGlvbkJhciA9IGNyZWF0ZU5hdigpO1xuICAgIGFwcGVuZEZ1bmMoaGVhZGVyQ29udGFpbmVyLCBuYXZpZ2F0aW9uQmFyKTtcbn1cblxuY29uc3QgbWFpbkRpc3BsYXkgPSAodXBwZXJUZXh0LCBpbWFnZVVybCwgaW1hZ2VJZCwgbG93ZXJUZXh0KSA9PiB7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBjcmVhdGVDb250YWluZXIoKTtcbiAgICBhcHBlbmRGdW5jKGNvbnRlbnQsIGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBkaXNwbGF5ID0gY3JlYXRlRGlzcGxheSgpO1xuICAgIGFwcGVuZEZ1bmMoY29udGFpbmVyLCBkaXNwbGF5KTtcblxuICAgIGNvbnN0IHVwcGVyID0gY3JlYXRlVXBwZXJUZXh0KHVwcGVyVGV4dCk7XG4gICAgYXBwZW5kRnVuYyhkaXNwbGF5LCB1cHBlcik7XG5cbiAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUltZyhpbWFnZVVybCwgaW1hZ2VJZCk7XG4gICAgYXBwZW5kRnVuYyhkaXNwbGF5LCBpbWFnZSk7XG5cbiAgICBjb25zdCBsb3dlciA9IGNyZWF0ZUxvd2VyVGV4dChsb3dlclRleHQpO1xuICAgIGFwcGVuZEZ1bmMoZGlzcGxheSwgbG93ZXIpO1xufVxuXG5jb25zdCBmb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG4gICAgYXBwZW5kRnVuYyhkb2N1bWVudC5ib2R5LCBmb290ZXIpXG59XG5cbmV4cG9ydCB7IGhlYWRlciwgbWFpbkRpc3BsYXksIGZvb3RlciB9OyIsImltcG9ydCB7IG1haW5EaXNwbGF5IH0gZnJvbSBcIi4vb3V0bGluZS5qc1wiO1xuXG5jb25zdCBob21lUGFnZSA9ICgpID0+IHtcbiAgICAvLyBoZWFkZXIoJ2hvbWUnLCAnTWFtYXMgUGl6emEnKTtcbiAgICBtYWluRGlzcGxheSgnTWFkZSB3aXRoIHBhc3Npb24gc2luY2UgMTk3NycsICdpbWFnZXMvY2hlZi5wbmcnLCAnY2hlZi1waWMnLCAnT3JkZXIgb25saW5lIG9yIHZpc2l0IHVzJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhvbWVQYWdlIiwiLy8gaW1wb3J0ICogYXMgb3V0bGluZSBmcm9tICcuL291dGxpbmUuanMnO1xuXG5jb25zdCBtZW51UGFnZSA9ICgpID0+IHtcbiAgICAvLyBvdXRsaW5lLmhlYWRlcignbWVudScsICdNYW1hcyBQaXp6YScpO1xuICAgIG1lbnVMYXlvdXQoKTtcbn1cblxuY29uc3QgbWVudUxheW91dCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAvLyAvLyBkaXNwbGF5IGVsZW1lbnQgd2hpY2ggaGFzIHRoZSBvcGFjaXR5ID0+IGRpc3BsYXkgaXMgaW4gY29udGFpbmVyXG4gICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpc3BsYXkuY2xhc3NMaXN0LmFkZCgnbWVudS1kaXNwbGF5Jyk7XG4gICAgZGlzcGxheS5jbGFzc0xpc3QuYWRkKCdkZXNpZ24nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG5cbiAgICBjb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW01ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGxldCBtZW51SXRlbXNBcnIgPSBbXVxuXG4gICAgbWVudUl0ZW1zQXJyLnB1c2goaXRlbTEpO1xuICAgIG1lbnVJdGVtc0Fyci5wdXNoKGl0ZW0yKTtcbiAgICBtZW51SXRlbXNBcnIucHVzaChpdGVtMyk7XG4gICAgbWVudUl0ZW1zQXJyLnB1c2goaXRlbTQpO1xuICAgIG1lbnVJdGVtc0Fyci5wdXNoKGl0ZW01KTtcbiAgICBtZW51SXRlbXNBcnIucHVzaChpdGVtNik7XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG1lbnVJdGVtc0FycltpXS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCAnbWVudS1pdGVtcycpO1xuXG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQobWVudUl0ZW1zQXJyW2ldKTtcblxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudUl0ZW1zQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBjb25zdCBpbWdBcnIgPSBbJ2ltYWdlcy9zYWxzaWNjaWEucG5nJywgJ2ltYWdlcy9wb21vZG9yby5wbmcnLCAnaW1hZ2VzL2NyZW1hLnBuZycsICdpbWFnZXMvZ2FtYmVyaS5wbmcnLCAnaW1hZ2VzL2Rpc2d1c3Rvc28ucG5nJywgJ2ltYWdlcy9wZXBlLnBuZyddO1xuICAgICAgICBpbWFnZS5zcmMgPSBpbWdBcnJbaV07XG4gICAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsICdwaXp6YS1waWMnKTtcblxuICAgICAgICBjb25zdCB0aXRsZXNBcnIgPSBbJ1NhbHNpY2NpYScsICdQb21vZG9ybycsICdDcmVtYScsICdHYW1iZXJpJywgJ0Rpc2d1c3Rvc28nLCAnUGVwZSddO1xuICAgICAgICBpdGVtVGl0bGUuaW5uZXJIVE1MID0gdGl0bGVzQXJyW2ldO1xuXG4gICAgICAgIGNvbnN0IHNhbHNpY2NpYURlc2NyaXB0aW9uID0gJ1RvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBUb21hdG8sIEJhc2lsLCBQZXBwZXJvbmknO1xuICAgICAgICBjb25zdCBQb21vZG9yb0Rlc2NyaXB0aW9uID0gJ0FsZnJlZG8gc2F1Y2UsIEZldGEgQ2hlZXNlLCBUb21hdG8sIE9uaW9ucywgQ2hpbGknO1xuICAgICAgICBjb25zdCBjcmVtYURlc2NyaXB0aW9uID0gJ0FsZnJlZG8gc2F1Y2UsIE1vemFyZWxsYSwgU2hyaW1wLCBTYWxtb24sIEJhc2lsLCBPbGl2ZXMsIFBpbmVhcHBsZSc7XG4gICAgICAgIGNvbnN0IGdhbWJlcmlEZXNjcmlwdGlvbiA9ICdUb21hdG8gc2F1Y2UsIEZldGEgQ2hlZXNlLCBTaHJpbXAsIE9saXZlcywgQmFzaWwnO1xuICAgICAgICBjb25zdCBkaXNndXN0b3NvRGVzY3JpcHRpb24gPSAnVG9tYXRvIHNhdWNlLCBCYWNvbiwgUGluZWFwcGxlLCBCYXNpbCwgT2xpdmVzJztcbiAgICAgICAgY29uc3QgcGVwZURlc2NyaXB0aW9uID0gJ0FsZnJlZG8gc2F1Y2UsIE1vemFyZWxsYSwgT2xpdmVzLCBCYXNpbCwgQ2hpbGxpIEZsYWtlcyc7XG5cbiAgICAgICAgY29uc3QgZGVzY2lwdGlvbnNBcnIgPSBbc2Fsc2ljY2lhRGVzY3JpcHRpb24sIFBvbW9kb3JvRGVzY3JpcHRpb24sIGNyZW1hRGVzY3JpcHRpb24sIGdhbWJlcmlEZXNjcmlwdGlvbiwgZGlzZ3VzdG9zb0Rlc2NyaXB0aW9uLCBwZXBlRGVzY3JpcHRpb25dO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZGVzY2lwdGlvbnNBcnJbaV07XG4gICAgICAgIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2NyaXB0aW9uJyk7XG5cblxuICAgICAgICBtZW51SXRlbXNBcnJbaV0uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICBtZW51SXRlbXNBcnJbaV0uYXBwZW5kQ2hpbGQoaXRlbVRpdGxlKTtcbiAgICAgICAgbWVudUl0ZW1zQXJyW2ldLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7IiwiaW1wb3J0IGhvbWVQYWdlIGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHsgZm9vdGVyLCBoZWFkZXIgfSBmcm9tIFwiLi9vdXRsaW5lLmpzXCI7XG5cbmxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICAgIGhlYWRlcigpO1xuICAgIGZvb3RlcigpO1xuICAgIGhvbWVQYWdlKCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uaW5uZXJIVE1MID09PSAnTWVudScpIHtcbiAgICAgICAgICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBtZW51UGFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uaW5uZXJIVE1MID09PSAnQ29udGFjdCcpIHtcbiAgICAgICAgICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBjb250YWN0UGFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uaW5uZXJIVE1MID09PSAnSG9tZScpIHtcbiAgICAgICAgICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBob21lUGFnZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmNvbnN0IHJlbW92ZSA9ICgpID0+IHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKTtcbn1cblxubWFpbigpOyIsImltcG9ydCAqIGFzIG91dGxpbmUgZnJvbSAnLi9vdXRsaW5lLmpzJztcblxuY29uc3QgY29udGFjdFBhZ2UgPSAoKSA9PiB7XG4gICAgLy8gb3V0bGluZS5oZWFkZXIoJ2NvbnRhY3QnLCAnTWFtYXMgUGl6emEnKTtcbiAgICBvdXRsaW5lLm1haW5EaXNwbGF5KCfwn5OeICAxMjMtNDU2LTc4OTAnLCAnaW1hZ2VzL2NuLW1hcC5wbmcnLCAnbWFwLXBpYycsICcyOTAgQnJlbW5lciBCbHZkLCBUb3JvbnRvJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlOyJdLCJuYW1lcyI6WyJjb250ZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZEZ1bmMiLCJwYXJlbnQiLCJjaGlsZCIsImFwcGVuZENoaWxkIiwibWFpbkRpc3BsYXkiLCJ1cHBlclRleHQiLCJpbWFnZVVybCIsImltYWdlSWQiLCJsb3dlclRleHQiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiY3JlYXRlQ29udGFpbmVyIiwiZGlzcGxheSIsImNyZWF0ZURpc3BsYXkiLCJ1cHBlciIsIndvcmQxIiwiaW5uZXJIVE1MIiwiY3JlYXRlVXBwZXJUZXh0IiwiaW1hZ2UiLCJzcmMiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVJbWciLCJsb3dlciIsIndvcmQyIiwiY3JlYXRlTG93ZXJUZXh0IiwiaXRlbTEiLCJpdGVtMiIsIml0ZW0zIiwiaXRlbTQiLCJpdGVtNSIsIml0ZW02IiwibWVudUl0ZW1zQXJyIiwicHVzaCIsImkiLCJsZW5ndGgiLCJpdGVtVGl0bGUiLCJpdGVtRGVzY3JpcHRpb24iLCJpbWdBcnIiLCJ0aXRsZXNBcnIiLCJkZXNjaXB0aW9uc0FyciIsIm1lbnVMYXlvdXQiLCJyZW1vdmUiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImhlYWRlckNvbnRhaW5lciIsImhlYWRlciIsImNyZWF0ZUhlYWRlciIsInRpdGxlIiwiY3JlYXRlVGl0bGUiLCJuYXZpZ2F0aW9uQmFyIiwibmF2IiwiaG9tZSIsIm1lbnUiLCJjb250YWN0IiwiaHJlZiIsImNyZWF0ZU5hdiIsImZvb3RlciIsImFuY2hvckZvb3RlciIsInRhcmdldCIsImNyZWF0ZUZvb3RlciIsImJvZHkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiXSwic291cmNlUm9vdCI6IiJ9