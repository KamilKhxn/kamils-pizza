(()=>{"use strict";const e=document.getElementById("content"),t=(e,t)=>{e.appendChild(t)},n=(n,s,c,a)=>{const i=(()=>{const e=document.createElement("div");return e.classList.add("container"),e})();t(e,i);const o=(()=>{const e=document.createElement("div");return e.classList.add("display"),e.classList.add("design"),e})();t(i,o);const d=(e=>{const t=document.createElement("div");return t.classList.add("upper"),t.innerHTML=e,t})(n);t(o,d);const r=((e,t)=>{const n=document.createElement("img");return n.src=e,n.setAttribute("id",t),n})(s,c);t(o,r);const l=(e=>{const t=document.createElement("div");return t.classList.add("lower"),t.innerHTML=e,t})(a);t(o,l)},s=()=>{n("Made with passion since 1977","images/chef.png","chef-pic","Order online or visit us")},c=()=>{(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("menu-container"),e.appendChild(t);const n=document.createElement("div");n.classList.add("menu-display"),n.classList.add("design"),t.appendChild(n);const s=document.createElement("div"),c=document.createElement("div"),a=document.createElement("div"),i=document.createElement("div"),o=document.createElement("div"),d=document.createElement("div");let r=[];r.push(s),r.push(c),r.push(a),r.push(i),r.push(o),r.push(d);for(let e=0;e<r.length;e++)r[e].setAttribute("id","menu-items"),n.appendChild(r[e]);for(let e=0;e<r.length;e++){const t=document.createElement("img"),n=document.createElement("div"),s=document.createElement("div"),c=["images/salsiccia.png","images/pomodoro.png","images/crema.png","images/gamberi.png","images/disgustoso.png","images/pepe.png"];t.src=c[e],t.setAttribute("id","pizza-pic");const a=["Salsiccia","Pomodoro","Crema","Gamberi","Disgustoso","Pepe"];n.innerHTML=a[e];const i=["Tomato sauce, Mozarella, Tomato, Basil, Pepperoni","Alfredo sauce, Feta Cheese, Tomato, Onions, Chili","Alfredo sauce, Mozarella, Shrimp, Salmon, Basil, Olives, Pineapple","Tomato sauce, Feta Cheese, Shrimp, Olives, Basil","Tomato sauce, Bacon, Pineapple, Basil, Olives","Alfredo sauce, Mozarella, Olives, Basil, Chilli Flakes"];s.innerHTML=i[e],s.classList.add("item-description"),r[e].appendChild(t),r[e].appendChild(n),r[e].appendChild(s)}})()};let a=document.getElementById("content");const i=()=>{a.removeChild(a.lastChild)};(()=>{const n=(()=>{const e=document.createElement("div");return e.classList.add("header"),e.classList.add("design"),e})();t(e,n);const s=(()=>{const e=document.createElement("div");return e.setAttribute("id","title"),e.innerHTML="Papas Pizza",e})();t(n,s);const c=(()=>{const e=document.createElement("div");e.classList.add("topnav");const n=document.createElement("button"),s=document.createElement("button"),c=document.createElement("button");return n.innerHTML="Home",n.href="#home",s.innerHTML="Menu",s.href="#menu",c.innerHTML="Contact",c.href="#contact",t(e,n),t(e,s),t(e,c),e})();t(n,c)})(),(()=>{const e=(()=>{const e=document.createElement("div");e.classList.add("footer"),e.classList.add("design"),e.innerHTML="Created by ";const n=document.createElement("a");return n.innerHTML="Kamilkhxn",n.href="https://github.com/KamilKhxn/Calculator",n.target="_blank",t(e,n),e})();t(document.body,e)})(),s(),document.querySelectorAll("button").forEach((e=>{e.addEventListener("click",(t=>{"Menu"===e.innerHTML&&(i(),c()),"Contact"===e.innerHTML&&(i(),n("📞  123-456-7890","images/cn-map.png","map-pic","290 Bremner Blvd, Toronto")),"Home"===e.innerHTML&&(i(),s())}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQVc4QyxFQUFpQkssSUdwRzVCSixHSHlIVyxNQUNYLE1BQU1XLEVBbERXLE1BQ2pCLE1BQU1BLEVBQVM1RCxTQUFTWSxjQUFjLE9BQ3RDZ0QsRUFBTy9DLFVBQVVDLElBQUksVUFDckI4QyxFQUFPL0MsVUFBVUMsSUFBSSxVQUNyQjhDLEVBQU94QyxVQUFZLGNBRW5CLE1BQU15QyxFQUFlN0QsU0FBU1ksY0FBYyxLQU81QyxPQU5BaUQsRUFBYXpDLFVBQVksWUFDekJ5QyxFQUFhSCxLQUFPLDBDQUNwQkcsRUFBYUMsT0FBUyxTQUV0QjVELEVBQVcwRCxFQUFRQyxHQUVaRCxHQXFDUUcsR0FDZjdELEVBQVdGLFNBQVNnRSxLQUFNSixJRzFIMUJBLEdBQ0FMLElBRUF2RCxTQUFTaUUsaUJBQWlCLFVBQVVDLFNBQVFDLElBQ3hDQSxFQUFLQyxpQkFBaUIsU0FBU0MsSUFDSixTQUFuQkYsRUFBSy9DLFlBQ0x5QixJQUNBVyxLQUVtQixZQUFuQlcsRUFBSy9DLFlBQ0x5QixJQ2ZaLEVBQW9CLG1CQUFvQixvQkFBcUIsVUFBVyw4QkRrQnpDLFNBQW5Cc0IsRUFBSy9DLFlBQ0x5QixJQUNBVSxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va2FtaWxzLXBpenphLy4vc3JjL291dGxpbmUuanMiLCJ3ZWJwYWNrOi8va2FtaWxzLXBpenphLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8va2FtaWxzLXBpenphLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8va2FtaWxzLXBpenphLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2thbWlscy1waXp6YS8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBhcHBlbmRGdW5jID0gKHBhcmVudCwgY2hpbGQpID0+IHtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xufVxuXG4vLyBoZWFkZXIgaGVscGVyIG1ldGhvZHNcbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2lnbicpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmNvbnN0IGNyZWF0ZVRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnUGFwYXMgUGl6emEnO1xuICAgIHJldHVybiB0aXRsZTtcbn1cblxuY29uc3QgY3JlYXRlTmF2ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdi5jbGFzc0xpc3QuYWRkKCd0b3BuYXYnKTtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgaG9tZS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgaG9tZS5ocmVmID0gJyNob21lJztcblxuICAgIG1lbnUuaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIG1lbnUuaHJlZiA9ICcjbWVudSc7XG5cbiAgICBjb250YWN0LmlubmVySFRNTCA9ICdDb250YWN0JztcbiAgICBjb250YWN0LmhyZWYgPSAnI2NvbnRhY3QnO1xuXG4gICAgYXBwZW5kRnVuYyhuYXYsIGhvbWUpO1xuICAgIGFwcGVuZEZ1bmMobmF2LCBtZW51KTtcbiAgICBhcHBlbmRGdW5jKG5hdiwgY29udGFjdCk7XG5cbiAgICByZXR1cm4gbmF2O1xufVxuXG4vLyBtYWluIGRpc3BsYXkgaGVscGVyIGZ1bmN0aW9uc1xuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBjcmVhdGVEaXNwbGF5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXknKTtcbiAgICBkaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2Rlc2lnbicpO1xuICAgIHJldHVybiBkaXNwbGF5O1xufVxuXG5jb25zdCBjcmVhdGVVcHBlclRleHQgPSAodXBwZXJUZXh0KSA9PiB7XG4gICAgY29uc3Qgd29yZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3b3JkMS5jbGFzc0xpc3QuYWRkKCd1cHBlcicpO1xuICAgIHdvcmQxLmlubmVySFRNTCA9IHVwcGVyVGV4dDtcbiAgICByZXR1cm4gd29yZDE7XG59XG5jb25zdCBjcmVhdGVMb3dlclRleHQgPSAobG93ZXJUZXh0KSA9PiB7XG4gICAgY29uc3Qgd29yZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3b3JkMi5jbGFzc0xpc3QuYWRkKCdsb3dlcicpO1xuICAgIHdvcmQyLmlubmVySFRNTCA9IGxvd2VyVGV4dDtcbiAgICByZXR1cm4gd29yZDI7XG59XG5cbmNvbnN0IGNyZWF0ZUltZyA9IChpbWFnZVVybCwgaW1hZ2VJZCkgPT4ge1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1hZ2Uuc3JjID0gaW1hZ2VVcmw7XG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgaW1hZ2VJZCk7XG4gICAgcmV0dXJuIGltYWdlO1xufVxuXG4vLyBmb290ZXIgaGVscGVyIG1ldGhvZFxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZGVzaWduJyk7XG4gICAgZm9vdGVyLmlubmVySFRNTCA9ICdDcmVhdGVkIGJ5ICc7XG5cbiAgICBjb25zdCBhbmNob3JGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYW5jaG9yRm9vdGVyLmlubmVySFRNTCA9ICdLYW1pbGtoeG4nO1xuICAgIGFuY2hvckZvb3Rlci5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9LYW1pbEtoeG4vQ2FsY3VsYXRvcic7XG4gICAgYW5jaG9yRm9vdGVyLnRhcmdldCA9ICdfYmxhbmsnO1xuXG4gICAgYXBwZW5kRnVuYyhmb290ZXIsIGFuY2hvckZvb3Rlcik7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5cbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgICAvLyBjcmVhdGluZyB0aGUgaGVhZGVyIGRpdiBcbiAgICBjb25zdCBoZWFkZXJDb250YWluZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICBhcHBlbmRGdW5jKGNvbnRlbnQsIGhlYWRlckNvbnRhaW5lcik7XG5cbiAgICAvLyBjcmVhdGluZyB0aGUgdGl0bGUgXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVUaXRsZSgpO1xuICAgIGFwcGVuZEZ1bmMoaGVhZGVyQ29udGFpbmVyLCB0aXRsZSk7XG5cbiAgICAvLyBjcmVhdGluZyBuYXZpZ2F0aW9uIGJhclxuICAgIGNvbnN0IG5hdmlnYXRpb25CYXIgPSBjcmVhdGVOYXYoKTtcbiAgICBhcHBlbmRGdW5jKGhlYWRlckNvbnRhaW5lciwgbmF2aWdhdGlvbkJhcik7XG59XG5cbmNvbnN0IG1haW5EaXNwbGF5ID0gKHVwcGVyVGV4dCwgaW1hZ2VVcmwsIGltYWdlSWQsIGxvd2VyVGV4dCkgPT4ge1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlQ29udGFpbmVyKCk7XG4gICAgYXBwZW5kRnVuYyhjb250ZW50LCBjb250YWluZXIpO1xuXG4gICAgY29uc3QgZGlzcGxheSA9IGNyZWF0ZURpc3BsYXkoKTtcbiAgICBhcHBlbmRGdW5jKGNvbnRhaW5lciwgZGlzcGxheSk7XG5cbiAgICBjb25zdCB1cHBlciA9IGNyZWF0ZVVwcGVyVGV4dCh1cHBlclRleHQpO1xuICAgIGFwcGVuZEZ1bmMoZGlzcGxheSwgdXBwZXIpO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVJbWcoaW1hZ2VVcmwsIGltYWdlSWQpO1xuICAgIGFwcGVuZEZ1bmMoZGlzcGxheSwgaW1hZ2UpO1xuXG4gICAgY29uc3QgbG93ZXIgPSBjcmVhdGVMb3dlclRleHQobG93ZXJUZXh0KTtcbiAgICBhcHBlbmRGdW5jKGRpc3BsYXksIGxvd2VyKTtcbn1cblxuY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuICAgIGFwcGVuZEZ1bmMoZG9jdW1lbnQuYm9keSwgZm9vdGVyKVxufVxuXG5leHBvcnQgeyBoZWFkZXIsIG1haW5EaXNwbGF5LCBmb290ZXIgfTsiLCJpbXBvcnQgeyBtYWluRGlzcGxheSB9IGZyb20gXCIuL291dGxpbmUuanNcIjtcblxuY29uc3QgaG9tZVBhZ2UgPSAoKSA9PiB7XG4gICAgLy8gaGVhZGVyKCdob21lJywgJ01hbWFzIFBpenphJyk7XG4gICAgbWFpbkRpc3BsYXkoJ01hZGUgd2l0aCBwYXNzaW9uIHNpbmNlIDE5NzcnLCAnaW1hZ2VzL2NoZWYucG5nJywgJ2NoZWYtcGljJywgJ09yZGVyIG9ubGluZSBvciB2aXNpdCB1cycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lUGFnZSIsIi8vIGltcG9ydCAqIGFzIG91dGxpbmUgZnJvbSAnLi9vdXRsaW5lLmpzJztcblxuY29uc3QgbWVudVBhZ2UgPSAoKSA9PiB7XG4gICAgLy8gb3V0bGluZS5oZWFkZXIoJ21lbnUnLCAnTWFtYXMgUGl6emEnKTtcbiAgICBtZW51TGF5b3V0KCk7XG59XG5cbmNvbnN0IG1lbnVMYXlvdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgLy8gLy8gZGlzcGxheSBlbGVtZW50IHdoaWNoIGhhcyB0aGUgb3BhY2l0eSA9PiBkaXNwbGF5IGlzIGluIGNvbnRhaW5lclxuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ21lbnUtZGlzcGxheScpO1xuICAgIGRpc3BsYXkuY2xhc3NMaXN0LmFkZCgnZGVzaWduJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXkpO1xuXG4gICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW02ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgbWVudUl0ZW1zQXJyID0gW11cblxuICAgIG1lbnVJdGVtc0Fyci5wdXNoKGl0ZW0xKTtcbiAgICBtZW51SXRlbXNBcnIucHVzaChpdGVtMik7XG4gICAgbWVudUl0ZW1zQXJyLnB1c2goaXRlbTMpO1xuICAgIG1lbnVJdGVtc0Fyci5wdXNoKGl0ZW00KTtcbiAgICBtZW51SXRlbXNBcnIucHVzaChpdGVtNSk7XG4gICAgbWVudUl0ZW1zQXJyLnB1c2goaXRlbTYpO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtc0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBtZW51SXRlbXNBcnJbaV0uc2V0QXR0cmlidXRlKFwiaWRcIiwgJ21lbnUtaXRlbXMnKTtcblxuICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKG1lbnVJdGVtc0FycltpXSk7XG5cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtc0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgaW1nQXJyID0gWydpbWFnZXMvc2Fsc2ljY2lhLnBuZycsICdpbWFnZXMvcG9tb2Rvcm8ucG5nJywgJ2ltYWdlcy9jcmVtYS5wbmcnLCAnaW1hZ2VzL2dhbWJlcmkucG5nJywgJ2ltYWdlcy9kaXNndXN0b3NvLnBuZycsICdpbWFnZXMvcGVwZS5wbmcnXTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1nQXJyW2ldO1xuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCAncGl6emEtcGljJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVzQXJyID0gWydTYWxzaWNjaWEnLCAnUG9tb2Rvcm8nLCAnQ3JlbWEnLCAnR2FtYmVyaScsICdEaXNndXN0b3NvJywgJ1BlcGUnXTtcbiAgICAgICAgaXRlbVRpdGxlLmlubmVySFRNTCA9IHRpdGxlc0FycltpXTtcblxuICAgICAgICBjb25zdCBzYWxzaWNjaWFEZXNjcmlwdGlvbiA9ICdUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgVG9tYXRvLCBCYXNpbCwgUGVwcGVyb25pJztcbiAgICAgICAgY29uc3QgUG9tb2Rvcm9EZXNjcmlwdGlvbiA9ICdBbGZyZWRvIHNhdWNlLCBGZXRhIENoZWVzZSwgVG9tYXRvLCBPbmlvbnMsIENoaWxpJztcbiAgICAgICAgY29uc3QgY3JlbWFEZXNjcmlwdGlvbiA9ICdBbGZyZWRvIHNhdWNlLCBNb3phcmVsbGEsIFNocmltcCwgU2FsbW9uLCBCYXNpbCwgT2xpdmVzLCBQaW5lYXBwbGUnO1xuICAgICAgICBjb25zdCBnYW1iZXJpRGVzY3JpcHRpb24gPSAnVG9tYXRvIHNhdWNlLCBGZXRhIENoZWVzZSwgU2hyaW1wLCBPbGl2ZXMsIEJhc2lsJztcbiAgICAgICAgY29uc3QgZGlzZ3VzdG9zb0Rlc2NyaXB0aW9uID0gJ1RvbWF0byBzYXVjZSwgQmFjb24sIFBpbmVhcHBsZSwgQmFzaWwsIE9saXZlcyc7XG4gICAgICAgIGNvbnN0IHBlcGVEZXNjcmlwdGlvbiA9ICdBbGZyZWRvIHNhdWNlLCBNb3phcmVsbGEsIE9saXZlcywgQmFzaWwsIENoaWxsaSBGbGFrZXMnO1xuXG4gICAgICAgIGNvbnN0IGRlc2NpcHRpb25zQXJyID0gW3NhbHNpY2NpYURlc2NyaXB0aW9uLCBQb21vZG9yb0Rlc2NyaXB0aW9uLCBjcmVtYURlc2NyaXB0aW9uLCBnYW1iZXJpRGVzY3JpcHRpb24sIGRpc2d1c3Rvc29EZXNjcmlwdGlvbiwgcGVwZURlc2NyaXB0aW9uXTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGRlc2NpcHRpb25zQXJyW2ldO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjcmlwdGlvbicpO1xuXG5cbiAgICAgICAgbWVudUl0ZW1zQXJyW2ldLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgbWVudUl0ZW1zQXJyW2ldLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgICAgIG1lbnVJdGVtc0FycltpXS5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlOyIsImltcG9ydCBob21lUGFnZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCB7IGZvb3RlciwgaGVhZGVyIH0gZnJvbSBcIi4vb3V0bGluZS5qc1wiO1xuXG5sZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgICBoZWFkZXIoKTtcbiAgICBmb290ZXIoKTtcbiAgICBob21lUGFnZSgpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmlubmVySFRNTCA9PT0gJ01lbnUnKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgbWVudVBhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLmlubmVySFRNTCA9PT0gJ0NvbnRhY3QnKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgY29udGFjdFBhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLmlubmVySFRNTCA9PT0gJ0hvbWUnKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgaG9tZVBhZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5jb25zdCByZW1vdmUgPSAoKSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50Lmxhc3RDaGlsZCk7XG59XG5cbm1haW4oKTsiLCJpbXBvcnQgKiBhcyBvdXRsaW5lIGZyb20gJy4vb3V0bGluZS5qcyc7XG5cbmNvbnN0IGNvbnRhY3RQYWdlID0gKCkgPT4ge1xuICAgIC8vIG91dGxpbmUuaGVhZGVyKCdjb250YWN0JywgJ01hbWFzIFBpenphJyk7XG4gICAgb3V0bGluZS5tYWluRGlzcGxheSgn8J+TniAgMTIzLTQ1Ni03ODkwJywgJ2ltYWdlcy9jbi1tYXAucG5nJywgJ21hcC1waWMnLCAnMjkwIEJyZW1uZXIgQmx2ZCwgVG9yb250bycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGFnZTsiXSwibmFtZXMiOlsiY29udGVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRGdW5jIiwicGFyZW50IiwiY2hpbGQiLCJhcHBlbmRDaGlsZCIsIm1haW5EaXNwbGF5IiwidXBwZXJUZXh0IiwiaW1hZ2VVcmwiLCJpbWFnZUlkIiwibG93ZXJUZXh0IiwiY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImNyZWF0ZUNvbnRhaW5lciIsImRpc3BsYXkiLCJjcmVhdGVEaXNwbGF5IiwidXBwZXIiLCJ3b3JkMSIsImlubmVySFRNTCIsImNyZWF0ZVVwcGVyVGV4dCIsImltYWdlIiwic3JjIiwic2V0QXR0cmlidXRlIiwiY3JlYXRlSW1nIiwibG93ZXIiLCJ3b3JkMiIsImNyZWF0ZUxvd2VyVGV4dCIsIml0ZW0xIiwiaXRlbTIiLCJpdGVtMyIsIml0ZW00IiwiaXRlbTUiLCJpdGVtNiIsIm1lbnVJdGVtc0FyciIsInB1c2giLCJpIiwibGVuZ3RoIiwiaXRlbVRpdGxlIiwiaXRlbURlc2NyaXB0aW9uIiwiaW1nQXJyIiwidGl0bGVzQXJyIiwiZGVzY2lwdGlvbnNBcnIiLCJtZW51TGF5b3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJoZWFkZXJDb250YWluZXIiLCJoZWFkZXIiLCJjcmVhdGVIZWFkZXIiLCJ0aXRsZSIsImNyZWF0ZVRpdGxlIiwibmF2aWdhdGlvbkJhciIsIm5hdiIsImhvbWUiLCJtZW51IiwiY29udGFjdCIsImhyZWYiLCJjcmVhdGVOYXYiLCJmb290ZXIiLCJhbmNob3JGb290ZXIiLCJ0YXJnZXQiLCJjcmVhdGVGb290ZXIiLCJib2R5IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==