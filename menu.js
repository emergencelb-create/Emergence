document.querySelectorAll(".menu-articles").forEach(function(el){

el.innerHTML = `

<h2>Explorer les grands thèmes</h2>

<select onchange="if(this.value) window.location.href=this.value;" style="padding:15px;width:100%;max-width:500px;font-size:18px;border-radius:12px;">

<option value="">Choisir un sujet...</option>

<optgroup label="Comprendre">

<option value="article1-corps-epuise.html">Corps épuisé</option>
<option value="article2-pourquoi-changer-est-difficile.html">Pourquoi changer est difficile</option>
<option value="article3-pourquoi-on-reste-bloque.html">Pourquoi reste-t-on bloqué ?</option>
<option value="article15-comprendre-son-systeme-nerveux-pour-reprendre-le-controle.html">Comprendre son système nerveux</option>
<option value="article16-et-si-tout-etait-lie-a-ton-systeme-nerveux.html">Tout est lié ?</option>
<option value="article17-qui-suis-je-vraiment.html">Qui suis-je vraiment ?</option>

</optgroup>

<optgroup label="Fatigue">

<option value="article6-pourquoi-je-suis-toujours-fatiguee.html">Toujours fatiguée</option>
<option value="article8-cerveau-qui-tourne-h24.html">Cerveau H24</option>
<option value="article9-pourquoi-tu-te-reposes-mais-tu-restes-epuisee.html">Repos mais épuisée</option>
<option value="article13-pourquoi-tu-culpabilises-quand-tu-te-reposes.html">Culpabilité au repos</option>
<option value="article14-tu-tes-habituee-a-vivre-avec-ton-stress.html">Habituée au stress</option>

</optgroup>

<optgroup label="Émotions">

<option value="article5-faire-disparaitre-les-crises.html">Les crises</option>
<option value="article7-arreter-une-crise-avant-qu-elle-ne-prenne-toute-la-place.html">Arrêter une crise</option>
<option value="article10-systeme-nerveux-besoin-de-securite.html">Besoin de sécurité</option>
<option value="article11-pourquoi-tu-n-arrives-pas-a-te-calmer.html">Impossible de se calmer</option>
<option value="article12-pourquoi-tu-ne-supportes-plus-les-imprevus.html">Les imprévus</option>

</optgroup>

</select>

`;

});