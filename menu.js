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
<option value="article18-quand-les-professionnels-observent-les-changements.html">
Quand les professionnels observent les changements
</option>
<option value="article19-pourquoi-comprendre-ce-qui-vous-arrive-peut-mettre-fin-au-mode-survie.html">
Pourquoi comprendre ce qui vous arrive
</option>
<option value="article20-ton-cerveau-te-ment-tous-les-soirs.html">
Ton cerveau te ment tous les soirs
</option>
<option value="article22-comprendre-son-cerveau-pour-arreter-de-subir.html">
Comprendre son cerveau pour arrêter de subir
</option>
<option value="article24-cerveau-contre-moi.html">
Tu te bats contre ton cerveau depuis des années ?
</option>
<option value="article27-emergence-vous-rend-autonome.html">ÉMERGENCE : devenir autonome
</option><option value="article28-ton-cerveau-ne-sait-plus-s-arreter.html">
Ton cerveau ne sait plus s'arrêter
</option>
<option value="article30-la-vraie-reussite.html">
La vraie réussite, ce n'est pas ce que tu montres
</option>
<option value="article31-medecin-et-coach-deux-roles-complementaires.html">
Médecin et coach : deux rôles complémentaires
</option>

</optgroup>

<optgroup label="🧪 Tests">

<option value="article23-test-surcharge-nerveuse.html">
Test de surcharge nerveuse
</option>
<option value="article29-combien-ca-te-coute-de-ne-pas-comprendre-ton-cerveau.html">
Combien ça te coûte de ne pas comprendre ton cerveau ?
</option>

</optgroup>

<optgroup label="Fatigue">

<option value="article6-pourquoi-je-suis-toujours-fatiguee.html">Toujours fatiguée</option>
<option value="article8-cerveau-qui-tourne-h24.html">Cerveau H24</option>
<option value="article9-pourquoi-tu-te-reposes-mais-tu-restes-epuisee.html">Repos mais épuisée</option>
<option value="article13-pourquoi-tu-culpabilises-quand-tu-te-reposes.html">Culpabilité au repos</option>
<option value="article14-tu-tes-habituee-a-vivre-avec-ton-stress.html">Habituée au stress</option>
<option value="article25-je-n-arrive-pas-a-me-poser.html">J'arrive pas à me poser</option>
<option value="article26-tu-ne-te-reposes-jamais-vraiment.html">Tu ne te reposes jamais vraiment</option>
<option value="article28-ton-cerveau-ne-sait-plus-s-arreter.html">
Ton cerveau ne sait plus s'arrêter
</option>

</optgroup>

<optgroup label="Émotions">

<option value="article5-faire-disparaitre-les-crises.html">Les crises</option>
<option value="article7-arreter-une-crise-avant-qu-elle-ne-prenne-toute-la-place.html">Arrêter une crise</option>
<option value="article10-systeme-nerveux-besoin-de-securite.html">Besoin de sécurité</option>
<option value="article11-pourquoi-tu-n-arrives-pas-a-te-calmer.html">Impossible de se calmer</option>
<option value="article12-pourquoi-tu-ne-supportes-plus-les-imprevus.html">Les imprévus</option>

</optgroup>

<optgroup label="💚 Témoignages réels">

<option value="article18-quand-les-professionnels-observent-les-changements.html">
Quand les professionnels observent les changements
</option>

<option value="article21-remettre-son-corps-en-mouvement-quand-le-systeme-nerveux-est-bloque.html">
Remettre son corps en mouvement
</option>

</optgroup>

</select>

`;

});