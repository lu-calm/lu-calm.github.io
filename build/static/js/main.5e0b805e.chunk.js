(this["webpackJsonpEth-ter-I-Die"]=this["webpackJsonpEth-ter-I-Die"]||[]).push([[0],{165:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n,l,r=a(0),o=a.n(r),c=a(20),s=a.n(c),i="";function u(){fetch("/BaseData/intro.txt").then((function(e){return e.text()})).then((function(e){n=e,"Full"})),fetch("/BaseData/end.txt").then((function(e){return e.text()})).then((function(e){l=e}))}function m(e){fetch(e).then((function(e){return e.text()})).then((function(e){i+=e}))}function d(){i="";var e=document.querySelectorAll("input[type='checkbox']:checked"),t=[];e.forEach((function(e){t.push(e.value)})),t.forEach(m)}var h=a(14),E=a(9),p=a(22),f=a(23),y=a(25),g=a(24),b=a(183),v=a(184),w=a(185),k=a(191),x=a(80),I=function(){return o.a.createElement(b.a,{fluid:!0},o.a.createElement(v.a,{className:"justify-content-md-center"},o.a.createElement(w.a,null,o.a.createElement("h3",{class:"text-center"},"Blockchain Explorer"),o.a.createElement("p",{class:"text-center"},"Please select the Blockchain Explorer you wish you beneficiaries to use. It is recommended that you pick a Blockchain Explorer as it helps reiterate concepts described in the Intro text before moving Ether or Ethereum based assets."))),o.a.createElement(v.a,null,o.a.createElement(w.a,null,o.a.createElement("div",{class:"d-flex justify-content-center"},o.a.createElement(k.a,{type:"checkbox",name:"BlockChainExplorer"},o.a.createElement(x.a,{variant:"outline-dark",onChange:d,value:"/DappData/etherscan.txt"},"Etherscan"))))),o.a.createElement("br",null),o.a.createElement(v.a,{className:"justify-content-md-center"},o.a.createElement(w.a,null,o.a.createElement("h3",{class:"text-center"},"On Ramp/ Off Ramp"),o.a.createElement("p",{class:"text-center"},"Please select your chosen On-Ramp/ Off-Ramp for your beneficiaries to transfer your Ether and Ethereum based assets to their local currency."))),o.a.createElement(v.a,null,o.a.createElement(w.a,null,o.a.createElement("div",{class:"d-flex justify-content-center"},o.a.createElement(k.a,{type:"checkbox",name:"On Ramp/ Off Ramp"},o.a.createElement(x.a,{variant:"outline-dark",onChange:d,value:"/DappData/coinbase.txt"},"Coinbase"),o.a.createElement(x.a,{variant:"outline-dark",onChange:d,value:"/DappData/uphold.txt",disabled:!0},"Uphold"))))))},D=a(89),T=a(90),C=a(188);function B(e){return o.a.createElement(C.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),o.a.createElement(C.a.Header,{closeButton:!0},o.a.createElement(C.a.Title,{id:"contained-modal-title-vcenter"},"Disclaimer")),o.a.createElement(C.a.Body,null,o.a.createElement("p",{class:"text-break"},"By confirming this .txt file download you are agreeing that Eth-ter-I-Die.rip and associated parties are not liable for any loss of Ether or Ethreum tokens/ assets that may occur during this process."),o.a.createElement("p",{class:"text-break"},"This is a literal \u201cHow to Guide\u201d of removing your Ethereum assets."),o.a.createElement("p",{class:"text-break"},"Do Not save any seed phrase digitally and keep the completed document in a safe place.")),o.a.createElement(C.a.Footer,null,o.a.createElement(T.a,{variant:"primary",type:"submit",onClick:function(){!function(e,t){var n=a(64),l=new Blob([t],{type:"text/plain;charset=utf-8"});n.saveAs(l,e)}("Eth-ter-I-Die.txt",n+i+l)}},"Agree and Download"),o.a.createElement(T.a,{variant:"secondary",onClick:e.onHide},"Close")))}var S=function(){var e=o.a.useState(!1),t=Object(D.a)(e,2),a=t[0],n=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,null,o.a.createElement(w.a,null,o.a.createElement("div",{class:"d-flex justify-content-center"},o.a.createElement(T.a,{variant:"primary",onClick:function(){return n(!0)}},"Download File")),o.a.createElement(B,{show:a,onHide:function(){return n(!1)}}))))},A=a(186),j=a(189),H=a(190),O=a(85),F=a.n(O),K=function(){return o.a.createElement(b.a,{fluid:!0},o.a.createElement(v.a,{className:"justify-content-md-center"},o.a.createElement(w.a,null,o.a.createElement(A.a,{width:"180",className:"rounded mx-auto d-block",src:F.a,alt:"Logo"}))),o.a.createElement(v.a,{className:"justify-content-md-center"},o.a.createElement(w.a,null,o.a.createElement("h1",{class:"text-center"},"Eth-ter-I-Die"),o.a.createElement("p",{class:"text-center"},"Don\u2019t let your Ethereum assets be lost to the blockchain when you die."),o.a.createElement("p",{class:"text-center"},"Eth-ter-I-Die produces a basic introduction to Ethereum and template of instructions for your non-technical beneficiary to convert your Ethereum Tokens, from a variety of different DApps, to Ether and transfer your Ether to their local currency."))),o.a.createElement(v.a,null,o.a.createElement(w.a,null,o.a.createElement(j.a,null,o.a.createElement(H.a,null,o.a.createElement(j.a.Toggle,{as:H.a.Header,eventKey:"0"},"Instructions"),o.a.createElement(j.a.Collapse,{eventKey:"0"},o.a.createElement(H.a.Body,null,o.a.createElement("p",null,"Select the DApps and services below that you use, Eth-ter-I-Die generates a .txt file to download with a basic introduction to Ethereum and removal instructions for you to print. Read the document carefully to confirm the instructions are correct and add in any additional comments."),o.a.createElement("p",null,"All private and preference fields are left blank (i.e. __________ ) for you to ",o.a.createElement("kbd",null,"hand write")," once the document is printed."),o.a.createElement("p",null,o.a.createElement("kbd",null,"For your security reasons, DO NOT type in this information and save the document to your computer.")),o.a.createElement("p",null,"From here you need to make sure that document is kept as secure as possible. It is a literal \u201cHow to Guide\u201d of removing your Ethereum assets, you do not want it in the wrong hands."),o.a.createElement("p",null,"For further advice on how best to use Eth-ter-I-Die, check out the ",o.a.createElement(h.c,{to:"/about"},"About section")))))))))},P=function(){return o.a.createElement(b.a,{fluid:!0},o.a.createElement(v.a,null,o.a.createElement(w.a,null,o.a.createElement(j.a,null,o.a.createElement(H.a,null,o.a.createElement(j.a.Toggle,{as:H.a.Header,eventKey:"0"},"Advanced Settings"),o.a.createElement(j.a.Collapse,{eventKey:"0"},o.a.createElement(H.a.Body,null,o.a.createElement("h4",null,"Include/ Exclude Intro and End Sections"),o.a.createElement("p",null,'Chose below if you want to include or exclude the "Intro" and "End" text sections generated by Eth-ter-I-Die. Exlcuding this content is useful for those using Eth-ter-I-Die for multiple wallets.'),o.a.createElement(v.a,{className:"justify-content-md-center"},o.a.createElement(w.a,{class:"col-sm-offset-3 col-sm-2"},o.a.createElement(T.a,{variant:"success",type:"submit",onClick:function(){u()}},"Include (Default)")),o.a.createElement(w.a,{class:"col-sm-offset-1 col-sm-2"},o.a.createElement(T.a,{variant:"danger",type:"submit",onClick:function(){n="",l="","Empty"}},"Exclude"))))))))))},L=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(K,null),o.a.createElement("br",null),o.a.createElement(I,null),o.a.createElement("br",null),o.a.createElement(S,null),o.a.createElement("br",null),o.a.createElement(P,null))}}]),a}(r.Component),N=(a(102),a(87)),_=a.n(N),U=a(49),R=a.n(U),W=a(88),Y=a.n(W),G=U.Search.SearchBar,q=U.Search.ClearSearchButton,V=[{id:1,name:"Etherscan.io",category:"Blockchain Explorer",dapplink:"https://etherscan.io/",flink:"/DappData/etherscan.txt"},{id:2,name:"CoinBase",category:"Off Ramp",dapplink:"https://www.coinbase.com/",flink:"/DappData/coinbase.txt"},{id:3,name:"Uniswap",category:"Exchange",dapplink:"https://metamask.io/",flink:"/DappData/metamask.txt"},{id:4,name:"Ledger",category:"Wallet",dapplink:"https://shop.ledger.com/",flink:"/DappData/ledger.txt"}],Z=[{dataField:"id",text:"Product ID",hidden:!0},{dataField:"name",text:"Product Name",sort:!0},{dataField:"category",text:"Category",sort:!0},{dataField:"dapplink",text:"Website/ DApp Link",formatter:function(e,t,a){return o.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},"Website/ DApp Link")}},{dataField:"flink",text:"File Link",formatter:function(e,t,a){return o.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},"Link to File")}}],M={pageStartIndex:1,firstPageText:"First",prePageText:"Back",nextPageText:"Next",lastPageText:"Last",nextPageTitle:"First page",prePageTitle:"Pre page",firstPageTitle:"Next page",lastPageTitle:"Last page",showTotal:!0,sizePerPageList:[{text:"5",value:5},{text:"10",value:10},{text:"25",value:25}]},z=function(){return o.a.createElement(R.a,{keyField:"id",data:V,columns:Z,search:!0},(function(e){return o.a.createElement("div",null,o.a.createElement(G,e.searchProps),o.a.createElement(q,e.searchProps),o.a.createElement("hr",null),o.a.createElement(_.a,Object.assign({},e.baseProps,{bootstrap4:!0,striped:!0,hover:!0,pagination:Y()(M)})))}))},J=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Text Files"),o.a.createElement("p",null,"Use the table below to view the text files of the DApp or service you wish to use."),o.a.createElement(z,null))}}]),a}(r.Component),Q=a(12),X=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return o.a.createElement(b.a,null,o.a.createElement("h2",null,"Support Eth-ter-I-Die"),o.a.createElement(j.a,null,o.a.createElement(H.a,null,o.a.createElement(j.a.Toggle,{as:H.a.Header,eventKey:"0"},"Donation"),o.a.createElement(j.a.Collapse,{eventKey:"0"},o.a.createElement(H.a.Body,null,o.a.createElement("p",{class:"text-center"},"I strongly believe Eth-ter-I-Die should be a free service for all of the Ethereum community, and I will work on addressing that."),o.a.createElement("p",{class:"text-center"},"However if you are happy with this service and want to support future features a donation would be greatly appreciated","  "," ",o.a.createElement("span",{"aria-label":"Beaming Smiley Face",role:"img"},"\ud83d\ude0a")),o.a.createElement("p",{class:"text-center"},"Donation Address:")))),o.a.createElement(H.a,null,o.a.createElement(j.a.Toggle,{as:H.a.Header,eventKey:"1"},"Development"),o.a.createElement(j.a.Collapse,{eventKey:"1"},o.a.createElement(H.a.Body,null,o.a.createElement("p",{class:"text-center"},"Bear with me, I work on Eth-ter-I-Die as and when I can."),o.a.createElement("p",{class:"text-center"},"I will keep adding new DApps, services and features for the betterment of the site. However I am quite new to coding so it is a bit of a learning curve!"),o.a.createElement("p",{class:"text-center"},"You can witness my struggles on my youtube channel. Feel free to comment if you have any tips or advice, any help is greatly appreciated!"),o.a.createElement("p",{class:"text-center"},o.a.createElement(Q.SocialIcon,{url:"https://www.youtube.com/channel/UC9GTIw90lZei5mUfjmTf7fg",bgColor:"#000000"})),o.a.createElement("p",{class:"text-center"},"If you would like to help improve the shambles of code I have written, here is the GitHub account!"),o.a.createElement("p",{class:"text-center"},o.a.createElement(Q.SocialIcon,{url:"https://github.com/lu-calm/eth-ter-i-die",bgColor:"#000000"}))))),o.a.createElement(H.a,null,o.a.createElement(j.a.Toggle,{as:H.a.Header,eventKey:"2"},"Feedback and Suggestions (including new DApp requests)"),o.a.createElement(j.a.Collapse,{eventKey:"2"},o.a.createElement(H.a.Body,null,o.a.createElement("p",{class:"text-center"},"If you have some feedback or suggestions for Eth-ter-I-Die, please contact me via twitter."),o.a.createElement("p",{class:"text-center"},"Also let me know, via twitter, if you have any requests for new DApps or services to be added to Eth-ter-I-Die. I will try my best to add them ASAP!"),o.a.createElement("p",{class:"text-center"},o.a.createElement(Q.SocialIcon,{url:"https://twitter.com/lu_calm",bgColor:"#000000"})))))))}}]),a}(r.Component),$=function(){return o.a.createElement("div",null,o.a.createElement("p",{class:"text-center"},o.a.createElement(Q.SocialIcon,{url:"https://twitter.com/lu_calm",bgColor:"#000000"})," ","  ",o.a.createElement(Q.SocialIcon,{url:"https://www.youtube.com/channel/UC9GTIw90lZei5mUfjmTf7fg",bgColor:"#000000"}),"  ",o.a.createElement(Q.SocialIcon,{url:"https://github.com/lu-calm",bgColor:"#000000"})," ","  "))},ee=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return o.a.createElement(b.a,null,o.a.createElement("h4",null,"What's this all about then?"),o.a.createElement(j.a,null,o.a.createElement(H.a,null,o.a.createElement(j.a.Toggle,{as:H.a.Header,eventKey:"4"},"Latest News and Updates"),o.a.createElement(j.a.Collapse,{eventKey:"4"},o.a.createElement(H.a.Body,null,o.a.createElement("p",null,o.a.createElement("dl",null,o.a.createElement("dt",null,"News and Updates: 14/08/2020"),o.a.createElement("dd",null,"Alpha version released")))))),o.a.createElement(H.a,null,o.a.createElement(j.a.Toggle,{as:H.a.Header,eventKey:"0"},"Story Time"),o.a.createElement(j.a.Collapse,{eventKey:"0"},o.a.createElement(H.a.Body,null,o.a.createElement("p",{class:"text-break"},"Well done."),o.a.createElement("p",{class:"text-break"},"You have started accumulating Ethereum and Ethereum based tokens. You have great foresight, however, not enough to see the Number 42 bus when you cross the road tomorrow morning at 8:14am."),o.a.createElement("p",{class:"text-break"},"You have ceased to be, bereft of life, you rest in peace, you have kicked the bucket, hopped the twig, bit the dust, snuffed it, breathed your last, and gone to meet the Great Head of Blockchain Technologies in the sky."),o.a.createElement("p",{class:"text-break"},"So, what is going to happen to your Ethereum assets now?"),o.a.createElement("p",{class:"text-break"},"Your hardware wallet is passed over as a malfunctioning USB and recycled as e-waste."),o.a.createElement("p",{class:"text-break"},"Your wallet seed phrase, kept on a crumpled note, is overlooked as nonsense and recycled."),o.a.createElement("p",{class:"text-break"},"Who\u2019s going to benefit from all the time and money you\u2019ve invested in Ethereum; all that learning, developing and acquiring?  Currently the refuge collector is the odds-on favourite but likely the worth you have created will be lost forever. It will be your anonymous blockchain memorial to what might have been."),o.a.createElement("p",{class:"text-break"},"This does not have to be the case."),o.a.createElement("h4",null," I present to you Eth-ter-I-Die!")))),o.a.createElement(H.a,null,o.a.createElement(j.a.Toggle,{as:H.a.Header,eventKey:"1"},"Assumptions, Advice and Tips"),o.a.createElement(j.a.Collapse,{eventKey:"1"},o.a.createElement(H.a.Body,null,o.a.createElement("p",{class:"text-break"},"- The generated template will inform your loved ones on how to transfer your Ethereum assets to Ether first and then to fiat. This is in order to reduced complexity and minimise confusion."),o.a.createElement("p",{class:"text-break"},"- The content has been kept as concise as possible for the instructions to be followed as safely as possible. Some principles of Ethereum have been omitted for the purposed of reducing complexity. If you have suggestions of content improvements, please use the links in the footer to contact me."),o.a.createElement("p",{class:"text-break"},"- It is assumed you have enough Ether/ Gwei in your account  to cover the transaction fees."),o.a.createElement("p",{class:"text-break"},"- Content for all the selections can be found in ",o.a.createElement(h.c,{to:"/textfiles"},"The Files section"),"."),o.a.createElement("p",{class:"text-break"},"- Please make your handwriting as easy to read as possible."),o.a.createElement("p",{class:"text-break"},"- Additional wallets can be accommodated by re-doing the form for each wallet. You can remove the Intro and Outro text by clicking on advanced settings and clicking the \u201cExclude\u201d button. Or you can edit the .txt file to accommodate for additional wallet instructions."),o.a.createElement("p",{class:"text-break"},"- If possible, go through the document and process with your loved ones before you perish with a test wallet.")))),o.a.createElement(H.a,null,o.a.createElement(j.a.Toggle,{as:H.a.Header,eventKey:"2"},"Who Created This?"),o.a.createElement(j.a.Collapse,{eventKey:"2"},o.a.createElement(H.a.Body,null,o.a.createElement("p",null,"I did! Hello! My name is L\xfc Calm  ","  ",o.a.createElement("span",{"aria-label":"Beaming Smiley Face",role:"img"},"\ud83d\ude0a")),o.a.createElement("p",null,"I am attempting to learn to code/ develop DApps on the Ethereum blockchain."),o.a.createElement("p",null,"Eth-ter-I-Die is my first attempt at coding and now has become a passion project for me."),o.a.createElement("p",null,"I use Eth-tet-I-Die myself and am seeing first hand how complicated it is for the less technologically minded. We need to make it easier for our loved ones to understand this technology so they can benefit when we die."),o.a.createElement("p",null,"You can see the painstaking process to get to this stage via my Eth-ter-I-Die Development youtube playlist below."),o.a.createElement("p",{class:"text-center"},o.a.createElement(Q.SocialIcon,{url:"https://www.youtube.com/playlist?list=PLW-TtH0Ie84bBTkv1cVVI0L_7kLRZ-UmY",bgColor:"#000000"})),o.a.createElement("p",null,"Here are my social links to learn more about updates to Eth-ter-I-Die, upcoming projects and contact me."),o.a.createElement($,null)))),o.a.createElement(H.a,null,o.a.createElement(j.a.Toggle,{as:H.a.Header,eventKey:"3"},"Feature Roadmap"),o.a.createElement(j.a.Collapse,{eventKey:"3"},o.a.createElement(H.a.Body,null,o.a.createElement("p",null,"Eth-ter-I-Die is constantly under development if you want to help out head to THE GIHUB LINK "),o.a.createElement("p",null,"Here are some planned feature to Eth-ter-I-Die for the short and long term"),o.a.createElement("p",null,o.a.createElement("dl",null,o.a.createElement("dt",null,"Short Term"),o.a.createElement("dd",null,"- Add Ledger Hardware Wallet instructions (just saving up for one...)"),o.a.createElement("dd",null,"- Add MakerDao DApp instructions"),o.a.createElement("dd",null,"- Add OpenSea DApp instructions"),o.a.createElement("dd",null,"- Add more DApp and Service instructions (suggest via Twitter)"),o.a.createElement("dt",null,"Long Term"),o.a.createElement("dd",null,"- Make decentralised (currently hosted on GitHub Pages...)"),o.a.createElement("dd",null,"- Add Language Support"),o.a.createElement("dd",null,'- Add "Create Dapp Instructions submission" form')))))),o.a.createElement(H.a,null,o.a.createElement(j.a.Toggle,{as:H.a.Header,eventKey:"5"},"Archived News"),o.a.createElement(j.a.Collapse,{eventKey:"5"},o.a.createElement(H.a.Body,null,o.a.createElement("p",null,o.a.createElement("dl",null,o.a.createElement("dt",null,"News and Updates: 13/08/2020"),o.a.createElement("dd",null,"There is no previous news or updates..."))))))))}}]),a}(r.Component),te=(a(165),function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.b,null,o.a.createElement("div",null,o.a.createElement("h1",null,"Eth-ter-I-Die"),o.a.createElement("ul",{className:"header"},o.a.createElement("li",null,o.a.createElement(h.c,{exact:!0,to:"/"},"Home")),o.a.createElement("li",null,o.a.createElement(h.c,{to:"/about"},"About")),o.a.createElement("li",null,o.a.createElement(h.c,{to:"/textfiles"},"The Files")),o.a.createElement("li",null,o.a.createElement(h.c,{to:"/support"},"Support"))),o.a.createElement("div",{className:"content"},o.a.createElement(E.a,{exact:!0,path:"/",component:L}),o.a.createElement(E.a,{path:"/about",component:ee}),o.a.createElement(E.a,{path:"/textfiles",component:J}),o.a.createElement(E.a,{path:"/support",component:X})))))}),ae=a(187),ne=a(40),le=function(){var e="https://eth-ter-i-die.rip/";return o.a.createElement("div",null,o.a.createElement("p",null,"Share via: ","  ",o.a.createElement(ne.Email,{url:e})," ","  ",o.a.createElement(ne.Twitter,{url:e,shareText:"Check out Eth-ter-I-Die. Use it to guide your loved ones to your Ethereum assets after you have popped your clogs!"}),"  ",o.a.createElement(ne.Reddit,{url:e}),"  ",o.a.createElement(ne.Facebook,{url:e})))},re=function(){return o.a.createElement("div",null,o.a.createElement("p",null,"Contact: ","  ",o.a.createElement(Q.SocialIcon,{url:"https://twitter.com/lu_calm",bgColor:"#000000",style:{height:35,width:35}})," ","  ",o.a.createElement(Q.SocialIcon,{url:"https://github.com/lu-calm/eth-ter-i-die",bgColor:"#000000",style:{height:35,width:35}})," ","  ",o.a.createElement(Q.SocialIcon,{url:"https://www.youtube.com/playlist?list=PLW-TtH0Ie84bBTkv1cVVI0L_7kLRZ-UmY",bgColor:"#000000",style:{height:35,width:35}})))},oe=function(){return o.a.createElement(ae.a,{fluid:!0},o.a.createElement(b.a,null,o.a.createElement("p",null,o.a.createElement("span",{"aria-label":"Heart",role:"img"},"\ud83d\udda4")," ","  ","Donation address:"),o.a.createElement("p",null,o.a.createElement(re,null)),o.a.createElement("p",null,o.a.createElement(le,null))))};window.onload=function(){u()};var ce=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(te,null),o.a.createElement(oe,null))};a(180);s.a.render(o.a.createElement(h.a,{basename:"/lu-calm.github.io"},o.a.createElement(ce,null)),document.getElementById("root"))},85:function(e,t,a){e.exports=a.p+"static/media/logoxs.8faf6898.svg"},92:function(e,t,a){e.exports=a(181)}},[[92,1,2]]]);
//# sourceMappingURL=main.5e0b805e.chunk.js.map