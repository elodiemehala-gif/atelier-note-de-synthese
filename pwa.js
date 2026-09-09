// Installation mobile et enregistrement du service worker pour Atelier NDS
(function(){
  let deferredPrompt=null;

  function isStandalone(){
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone===true;
  }

  function ensureInstallButton(){
    if(isStandalone()) return null;
    let btn=document.getElementById('installAppBtn');
    if(btn) return btn;

    const actions=document.querySelector('.top-actions') || document.querySelector('.topbar');
    if(!actions) return null;

    btn=document.createElement('button');
    btn.id='installAppBtn';
    btn.type='button';
    btn.className='btn secondary';
    btn.textContent='Installer l’app';
    btn.style.whiteSpace='nowrap';
    btn.setAttribute('aria-label','Installer Atelier NDS sur cet appareil');
    btn.hidden=true;
    actions.appendChild(btn);

    btn.addEventListener('click',async()=>{
      if(deferredPrompt){
        deferredPrompt.prompt();
        try{ await deferredPrompt.userChoice; }catch(e){}
        deferredPrompt=null;
        btn.hidden=true;
        return;
      }

      const isiOS=/iphone|ipad|ipod/i.test(navigator.userAgent);
      const msg=isiOS
        ? 'Sur iPhone/iPad : ouvre le menu Partager de Safari puis choisis « Sur l’écran d’accueil ». '
        : 'Ouvre le menu du navigateur puis choisis « Installer l’application » ou « Ajouter à l’écran d’accueil ».';
      window.alert(msg);
    });
    return btn;
  }

  window.addEventListener('beforeinstallprompt',e=>{
    e.preventDefault();
    deferredPrompt=e;
    const btn=ensureInstallButton();
    if(btn) btn.hidden=false;
  });

  window.addEventListener('appinstalled',()=>{
    deferredPrompt=null;
    const btn=document.getElementById('installAppBtn');
    if(btn) btn.remove();
  });

  if('serviceWorker' in navigator){
    window.addEventListener('load',()=>{
      navigator.serviceWorker.register('./sw.js').catch(err=>console.warn('Service worker non enregistré',err));
    });
  }

  const btn=ensureInstallButton();
  if(btn && !isStandalone()){
    const isiOS=/iphone|ipad|ipod/i.test(navigator.userAgent);
    if(isiOS) btn.hidden=false;
  }
})();
