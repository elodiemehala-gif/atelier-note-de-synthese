// Refonte visuelle « Minimal chic + circuit d’apprentissage »
// N'altère aucune logique pédagogique : uniquement navigation, thème et micro-interface.

(function(){
  const ICONS={
    dashboard:"⌂",extract:"◈",draft:"✎",plan:"⌘",titles:"T",reperes:"◎",vocab:"A",syntax:"✓",progression:"▥",errors:"!",simulation:"◷"
  };

  function applyTheme(theme){
    document.body.dataset.theme=theme;
    localStorage.setItem("ndsTheme",theme);
    const b=document.getElementById("themeToggle");
    if(b){
      b.textContent=theme==="dark"?"☀":"☾";
      b.title=theme==="dark"?"Passer en mode clair":"Passer en mode sombre";
      b.setAttribute("aria-label",b.title);
    }
  }

  function decorateNav(){
    document.querySelectorAll("#nav button[data-page]").forEach(b=>{
      b.dataset.icon=ICONS[b.dataset.page]||"•";
    });
  }

  function buildTopActions(){
    const top=document.querySelector(".topbar");
    if(!top)return;
    let actions=top.querySelector(".top-actions");
    if(!actions){
      actions=document.createElement("div");
      actions.className="top-actions";
      const select=document.getElementById("datasetSelect");
      if(select) actions.appendChild(select);
      top.appendChild(actions);
    }
    if(!document.getElementById("themeToggle")){
      const btn=document.createElement("button");
      btn.id="themeToggle";
      btn.className="theme-toggle";
      btn.type="button";
      btn.addEventListener("click",()=>applyTheme(document.body.dataset.theme==="dark"?"light":"dark"));
      actions.appendChild(btn);
    }
  }

  function addSidebarLabel(){
    const brand=document.querySelector(".brand");
    if(!brand || document.querySelector(".learning-label"))return;
    const label=document.createElement("div");
    label.className="learning-label";
    label.textContent="Circuit d’apprentissage";
    label.style.cssText="font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);padding:0 8px 8px;font-weight:750";
    brand.parentNode.insertBefore(label,document.getElementById("nav"));
  }

  const saved=localStorage.getItem("ndsTheme");
  const preferred=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";
  applyTheme(saved||preferred);
  buildTopActions();
  addSidebarLabel();
  decorateNav();

  // knowledge.js / training-v4.js peuvent reconstruire le menu après init.
  const nav=document.getElementById("nav");
  if(nav){
    new MutationObserver(decorateNav).observe(nav,{childList:true,subtree:true});
  }
})();
