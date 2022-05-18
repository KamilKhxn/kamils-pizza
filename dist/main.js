(()=>{"use strict";const e=document.getElementById("content"),t=(t,n)=>{const a=document.createElement("div");a.classList.add("header"),a.classList.add("design"),e.appendChild(a);const i=document.createElement("div");i.setAttribute("id","title"),i.innerHTML=n,a.appendChild(i);const d=document.createElement("div");d.classList.add("topnav");const s=document.createElement("a"),c=document.createElement("a"),o=document.createElement("a");s.innerHTML="Home",c.innerHTML="Menu",o.innerHTML="Contact",d.appendChild(s),s.href="#home",d.appendChild(c),c.href="#menu",d.appendChild(o),o.href="#contact";const l=document.createElement("a");l.classList.add("active"),l.href="#"+t,console.log(t),a.appendChild(d)},n=(t,n,a,i)=>{const d=document.createElement("div");d.classList.add("container"),e.appendChild(d);const s=document.createElement("div");s.classList.add("display"),s.classList.add("design"),d.appendChild(s);const c=document.createElement("div");c.classList.add("upper"),c.innerHTML=t,s.appendChild(c);const o=document.createElement("img");o.src=n,o.setAttribute("id",a),s.appendChild(o);const l=document.createElement("div");l.classList.add("lower"),l.innerHTML=i,s.appendChild(l)},a=()=>{t("menu","Mamas Pizza"),(()=>{const e=document.getElementById("content"),t=document.createElement("div");t.classList.add("menu-container"),e.appendChild(t);const n=document.createElement("div");n.classList.add("menu-display"),n.classList.add("design"),t.appendChild(n);const a=document.createElement("div"),i=document.createElement("div"),d=document.createElement("div"),s=document.createElement("div"),c=document.createElement("div"),o=document.createElement("div");let l=[];l.push(a),l.push(i),l.push(d),l.push(s),l.push(c),l.push(o);for(let e=0;e<l.length;e++)l[e].setAttribute("id","menu-items"),n.appendChild(l[e]);for(let e=0;e<l.length;e++){const t=document.createElement("img"),n=document.createElement("div"),a=document.createElement("div"),i=["images/salsiccia.png","images/pomodoro.png","images/crema.png","images/gamberi.png","images/disgustoso.png","images/pepe.png"];t.src=i[e],t.setAttribute("id","pizza-pic");const d=["Salsiccia","Pomodoro","Crema","Gamberi","Disgustoso","Pepe"];n.innerHTML=d[e];const s=["Tomato sauce, Mozarella, Tomato, Basil, Pepperoni","Alfredo sauce, Feta Cheese, Tomato, Onions, Chili","Alfredo sauce, Mozarella, Shrimp, Salmon, Basil, Olives, Pineapple","Tomato sauce, Feta Cheese, Shrimp, Olives, Basil","Tomato sauce, Bacon, Pineapple, Basil, Olives","Alfredo sauce, Mozarella, Olives, Basil, Chilli Flakes"];a.innerHTML=s[e],a.classList.add("item-description"),l[e].appendChild(t),l[e].appendChild(n),l[e].appendChild(a)}})()},i=()=>{let e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild)};t("home","Mamas Pizza"),n("Made with passion since 1942","images/chef.png","chef-pic","Order online or visit us"),document.querySelectorAll("a").forEach((e=>{e.addEventListener("click",(d=>{let s=e.innerHTML;"Menu"===s&&(i(),a(),console.log("menu pressed")),"Contact"===s&&(i(),t("contact","Mamas Pizza"),n("☎️ 123 456 7890","images/cn-map.png","map-pic","290 Bremner Blvd, Toronto"),console.log("contact pressed"))}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlcyI6WyJ3ZWJwYWNrOi8va2FtaWxzLXBpenphLy4vc3JjL291dGxpbmUuanMiLCJ3ZWJwYWNrOi8va2FtaWxzLXBpenphLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8va2FtaWxzLXBpenphLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2thbWlscy1waXp6YS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2thbWlscy1waXp6YS8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBoZWFkZXIgPSAoYWN0aXZlLCBtYWluVGl0bGUpID0+IHtcblxuICAgIC8vIGFjdGl2ZSBpcyB0aGUgdGFiIHRoYXQgaXMgYWN0aXZlXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2lnbicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBtYWluVGl0bGU7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIC8vIG5hdmlnYXRpb24gYmFyIGluIGhlYWRlciBcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgndG9wbmF2Jyk7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgaG9tZS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgbWVudS5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgY29udGFjdC5pbm5lckhUTUwgPSAnQ29udGFjdCc7XG4gICAgbmF2LmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIGhvbWUuaHJlZiA9ICcjaG9tZSc7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG1lbnUuaHJlZiA9ICcjbWVudSc7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgIGNvbnRhY3QuaHJlZiA9ICcjY29udGFjdCc7XG5cblxuICAgIGNvbnN0IGFjdGl2ZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhY3RpdmVUYWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgYWN0aXZlVGFiLmhyZWYgPSAnIycgKyBhY3RpdmU7XG4gICAgLy8gYWN0aXZlVGFiLmlubmVySFRNTCA9IGFjdGl2ZTtcbiAgICBjb25zb2xlLmxvZyhhY3RpdmUpO1xuXG4gICAgLy8gPGEgY2xhc3M9XCJhY3RpdmVcIiBocmVmPVwiI2hvbWVcIj5Ib21lPC9hPlxuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XG59XG5cbmNvbnN0IG1haW5EaXNwbGF5ID0gKHVwcGVyVGV4dCwgaW1hZ2VVcmwsIGltYWdlSWQsIGxvd2VyVGV4dCkgPT4ge1xuICAgIC8vIC8vIGNvbnRhaW5lciBmb3IgdGhlIG1pZGRsZSBkaXNwbGF5IFxuICAgIC8vIGNvbnNvbGUubG9nKCdtYWluIGRpc3BsYXkgaGVyZScpO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIC8vIC8vIGRpc3BsYXkgZWxlbWVudCB3aGljaCBoYXMgdGhlIG9wYWNpdHkgPT4gZGlzcGxheSBpcyBpbiBjb250YWluZXJcbiAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGlzcGxheS5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5Jyk7XG4gICAgZGlzcGxheS5jbGFzc0xpc3QuYWRkKCdkZXNpZ24nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XG5cbiAgICAvLyB1cHBlciB3b3JkcyBpbiBkaXNwbGF5IFxuICAgIGNvbnN0IHdvcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd29yZDEuY2xhc3NMaXN0LmFkZCgndXBwZXInKTtcbiAgICB3b3JkMS5pbm5lckhUTUwgPSB1cHBlclRleHQ7XG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZCh3b3JkMSk7XG5cbiAgICAvLyBpbWFnZSBpbiBkaXNwbGF5ID0+IG1pZGRsZSBvZiBzZW50ZW5jZXNcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlLnNyYyA9IGltYWdlVXJsO1xuICAgIGltYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIGltYWdlSWQpO1xuICAgIC8vIHRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAvLyBsb3dlciB3b3JkcyBpbiBkaXNwbGF5IFxuICAgIGNvbnN0IHdvcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd29yZDIuY2xhc3NMaXN0LmFkZCgnbG93ZXInKTtcbiAgICB3b3JkMi5pbm5lckhUTUwgPSBsb3dlclRleHQ7XG4gICAgZGlzcGxheS5hcHBlbmRDaGlsZCh3b3JkMik7XG59XG5cbmV4cG9ydCB7IGhlYWRlciwgbWFpbkRpc3BsYXkgfTsiLCJpbXBvcnQgKiBhcyBvdXRsaW5lIGZyb20gJy4vb3V0bGluZS5qcyc7XG5cbmNvbnN0IG1lbnVQYWdlID0gKCkgPT4ge1xuICAgIG91dGxpbmUuaGVhZGVyKCdtZW51JywgJ01hbWFzIFBpenphJyk7XG4gICAgLy8gb3V0bGluZS5tYWluRGlzcGxheSgn4piO77iPIDEyMyA0NTYgNzg5MCcsICdpbWFnZXMvY24tbWFwLnBuZycsICdtYXAtcGljJywgJzI5MCBCcmVtbmVyIEJsdmQsIFRvcm9udG8nKTtcbiAgICBtZW51TGF5b3V0KCk7XG59XG5cbmNvbnN0IG1lbnVMYXlvdXQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgLy8gLy8gZGlzcGxheSBlbGVtZW50IHdoaWNoIGhhcyB0aGUgb3BhY2l0eSA9PiBkaXNwbGF5IGlzIGluIGNvbnRhaW5lclxuICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ21lbnUtZGlzcGxheScpO1xuICAgIGRpc3BsYXkuY2xhc3NMaXN0LmFkZCgnZGVzaWduJyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpc3BsYXkpO1xuXG4gICAgY29uc3QgaXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW02ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBsZXQgbWVudUl0ZW1zQXJyID0gW11cblxuICAgIG1lbnVJdGVtc0Fyci5wdXNoKGl0ZW0xKTtcbiAgICBtZW51SXRlbXNBcnIucHVzaChpdGVtMik7XG4gICAgbWVudUl0ZW1zQXJyLnB1c2goaXRlbTMpO1xuICAgIG1lbnVJdGVtc0Fyci5wdXNoKGl0ZW00KTtcbiAgICBtZW51SXRlbXNBcnIucHVzaChpdGVtNSk7XG4gICAgbWVudUl0ZW1zQXJyLnB1c2goaXRlbTYpO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtc0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBtZW51SXRlbXNBcnJbaV0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtcycpO1xuICAgICAgICBtZW51SXRlbXNBcnJbaV0uc2V0QXR0cmlidXRlKFwiaWRcIiwgJ21lbnUtaXRlbXMnKTtcblxuICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKG1lbnVJdGVtc0FycltpXSk7XG5cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lbnVJdGVtc0Fyci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBpdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgY29uc3QgaW1nQXJyID0gWydpbWFnZXMvc2Fsc2ljY2lhLnBuZycsICdpbWFnZXMvcG9tb2Rvcm8ucG5nJywgJ2ltYWdlcy9jcmVtYS5wbmcnLCAnaW1hZ2VzL2dhbWJlcmkucG5nJywgJ2ltYWdlcy9kaXNndXN0b3NvLnBuZycsICdpbWFnZXMvcGVwZS5wbmcnXTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gaW1nQXJyW2ldO1xuICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCAncGl6emEtcGljJyk7XG5cbiAgICAgICAgY29uc3QgdGl0bGVzQXJyID0gWydTYWxzaWNjaWEnLCAnUG9tb2Rvcm8nLCAnQ3JlbWEnLCAnR2FtYmVyaScsICdEaXNndXN0b3NvJywgJ1BlcGUnXTtcbiAgICAgICAgaXRlbVRpdGxlLmlubmVySFRNTCA9IHRpdGxlc0FycltpXTtcblxuICAgICAgICBjb25zdCBzYWxzaWNjaWFEZXNjcmlwdGlvbiA9ICdUb21hdG8gc2F1Y2UsIE1vemFyZWxsYSwgVG9tYXRvLCBCYXNpbCwgUGVwcGVyb25pJztcbiAgICAgICAgY29uc3QgUG9tb2Rvcm9EZXNjcmlwdGlvbiA9ICdBbGZyZWRvIHNhdWNlLCBGZXRhIENoZWVzZSwgVG9tYXRvLCBPbmlvbnMsIENoaWxpJztcbiAgICAgICAgY29uc3QgY3JlbWFEZXNjcmlwdGlvbiA9ICdBbGZyZWRvIHNhdWNlLCBNb3phcmVsbGEsIFNocmltcCwgU2FsbW9uLCBCYXNpbCwgT2xpdmVzLCBQaW5lYXBwbGUnO1xuICAgICAgICBjb25zdCBnYW1iZXJpRGVzY3JpcHRpb24gPSAnVG9tYXRvIHNhdWNlLCBGZXRhIENoZWVzZSwgU2hyaW1wLCBPbGl2ZXMsIEJhc2lsJztcbiAgICAgICAgY29uc3QgZGlzZ3VzdG9zb0Rlc2NyaXB0aW9uID0gJ1RvbWF0byBzYXVjZSwgQmFjb24sIFBpbmVhcHBsZSwgQmFzaWwsIE9saXZlcyc7XG4gICAgICAgIGNvbnN0IHBlcGVEZXNjcmlwdGlvbiA9ICdBbGZyZWRvIHNhdWNlLCBNb3phcmVsbGEsIE9saXZlcywgQmFzaWwsIENoaWxsaSBGbGFrZXMnO1xuXG4gICAgICAgIGNvbnN0IGRlc2NpcHRpb25zQXJyID0gW3NhbHNpY2NpYURlc2NyaXB0aW9uLCBQb21vZG9yb0Rlc2NyaXB0aW9uLCBjcmVtYURlc2NyaXB0aW9uLCBnYW1iZXJpRGVzY3JpcHRpb24sIGRpc2d1c3Rvc29EZXNjcmlwdGlvbiwgcGVwZURlc2NyaXB0aW9uXTtcbiAgICAgICAgaXRlbURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGRlc2NpcHRpb25zQXJyW2ldO1xuICAgICAgICBpdGVtRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjcmlwdGlvbicpO1xuXG5cbiAgICAgICAgbWVudUl0ZW1zQXJyW2ldLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgbWVudUl0ZW1zQXJyW2ldLmFwcGVuZENoaWxkKGl0ZW1UaXRsZSk7XG4gICAgICAgIG1lbnVJdGVtc0FycltpXS5hcHBlbmRDaGlsZChpdGVtRGVzY3JpcHRpb24pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlOyIsIi8vIGFkZGluZyBodG1sIGNvZGUgdG8gaG9tZXBhZ2Vcbi8vIG1haW4gaG9tZXBhZ2Vcbi8vIGltcG9ydCBvdGhlciBtb2R1bGVzIGZvciBvdGhlciB0YWJzXG5cbmltcG9ydCBob21lcGFnZSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gXCIuL21lbnUuanNcIjtcblxuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICAgIGhvbWVwYWdlKCk7XG4gICAgLy8gd2hpbGUgKHRydWUpIHtcbiAgICBjaGVja1RhYlByZXNzZWQoJ3RydWUnKTtcbiAgICAvLyB9XG59XG5cbmNvbnN0IHJlbW92ZURhdGEgPSAoKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5jb25zdCBjaGVja1RhYlByZXNzZWQgPSAoKSA9PiB7XG5cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGJvb2wpID0+IHtcbiAgICAgICAgICAgIGxldCB0YWJQcmVzc2VkID0gaXRlbS5pbm5lckhUTUw7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YWJQcmVzc2VkICsgJ2luZGV4LmpzJyk7XG5cbiAgICAgICAgICAgIGlmICh0YWJQcmVzc2VkID09PSAnTWVudScpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVEYXRhKCk7XG4gICAgICAgICAgICAgICAgbWVudVBhZ2UoKTtcbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KHJlbW92ZURhdGEoKSwgMTAwMDApO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ21lbnUgcHJlc3NlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGFiUHJlc3NlZCA9PT0gJ0NvbnRhY3QnKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlRGF0YSgpO1xuICAgICAgICAgICAgICAgIGNvbnRhY3RQYWdlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbnRhY3QgcHJlc3NlZCcpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5tYWluKCk7IiwiaW1wb3J0IHsgaGVhZGVyLCBtYWluRGlzcGxheSB9IGZyb20gXCIuL291dGxpbmUuanNcIjtcblxuY29uc3QgaG9tZXBhZ2UgPSAoKSA9PiB7XG4gICAgaGVhZGVyKCdob21lJywgJ01hbWFzIFBpenphJyk7XG4gICAgbWFpbkRpc3BsYXkoJ01hZGUgd2l0aCBwYXNzaW9uIHNpbmNlIDE5NDInLCAnaW1hZ2VzL2NoZWYucG5nJywgJ2NoZWYtcGljJywgJ09yZGVyIG9ubGluZSBvciB2aXNpdCB1cycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBob21lcGFnZSIsImltcG9ydCAqIGFzIG91dGxpbmUgZnJvbSAnLi9vdXRsaW5lLmpzJztcblxuY29uc3QgY29udGFjdFBhZ2UgPSAoKSA9PiB7XG4gICAgb3V0bGluZS5oZWFkZXIoJ2NvbnRhY3QnLCAnTWFtYXMgUGl6emEnKTtcbiAgICBvdXRsaW5lLm1haW5EaXNwbGF5KCfimI7vuI8gMTIzIDQ1NiA3ODkwJywgJ2ltYWdlcy9jbi1tYXAucG5nJywgJ21hcC1waWMnLCAnMjkwIEJyZW1uZXIgQmx2ZCwgVG9yb250bycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGFnZTtcblxuIl0sIm5hbWVzIjpbImNvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVhZGVyIiwiYWN0aXZlIiwibWFpblRpdGxlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwidGl0bGUiLCJzZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJuYXYiLCJob21lIiwibWVudSIsImNvbnRhY3QiLCJocmVmIiwiYWN0aXZlVGFiIiwiY29uc29sZSIsImxvZyIsIm1haW5EaXNwbGF5IiwidXBwZXJUZXh0IiwiaW1hZ2VVcmwiLCJpbWFnZUlkIiwibG93ZXJUZXh0IiwiY29udGFpbmVyIiwiZGlzcGxheSIsIndvcmQxIiwiaW1hZ2UiLCJzcmMiLCJ3b3JkMiIsIml0ZW0xIiwiaXRlbTIiLCJpdGVtMyIsIml0ZW00IiwiaXRlbTUiLCJpdGVtNiIsIm1lbnVJdGVtc0FyciIsInB1c2giLCJpIiwibGVuZ3RoIiwiaXRlbVRpdGxlIiwiaXRlbURlc2NyaXB0aW9uIiwiaW1nQXJyIiwidGl0bGVzQXJyIiwiZGVzY2lwdGlvbnNBcnIiLCJtZW51TGF5b3V0IiwicmVtb3ZlRGF0YSIsImVsZW1lbnQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJhZGRFdmVudExpc3RlbmVyIiwiYm9vbCIsInRhYlByZXNzZWQiXSwic291cmNlUm9vdCI6IiJ9