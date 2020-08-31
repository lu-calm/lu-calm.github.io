(this["webpackJsonpEth-ter-I-Die"]=this["webpackJsonpEth-ter-I-Die"]||[]).push([[0],{167:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n,l,r=a(0),c=a.n(r),o=a(20),s=a.n(o),i="";function u(){fetch("/BaseData/intro.txt").then((function(e){return e.text()})).then((function(e){n=e,"Full"})),fetch("/BaseData/end.txt").then((function(e){return e.text()})).then((function(e){l=e}))}function m(e){fetch(e).then((function(e){return e.text()})).then((function(e){i+=e}))}function d(){i="";var e=document.querySelectorAll("input[type='checkbox']:checked"),t=[];e.forEach((function(e){t.push(e.value)})),t.forEach(m)}var h=a(11),p=a(9),E=a(22),f=a(23),y=a(25),b=a(24),g=a(185),v=a(186),x=a(187),w=a(192),k=a(83),D=function(){return c.a.createElement(g.a,{fluid:!0},c.a.createElement(v.a,{className:"justify-content-md-center"},c.a.createElement(x.a,null,c.a.createElement("h3",{class:"text-center"},"Blockchain Explorer"),c.a.createElement("p",{class:"text-center"},"Please select the Blockchain Explorer you wish you beneficiaries to use. It is recommended that you pick a Blockchain Explorer as it helps reiterate concepts described in the Intro text before moving Ether or Ethereum based assets."))),c.a.createElement(v.a,null,c.a.createElement(x.a,null,c.a.createElement("div",{class:"d-flex justify-content-center"},c.a.createElement(w.a,{type:"checkbox",name:"BlockChainExplorer",defaultValue:"/DappData/etherscan.txt"},c.a.createElement(k.a,{variant:"outline-dark",onChange:d,value:"/DappData/etherscan.txt"},"Etherscan"))))),c.a.createElement("br",null),c.a.createElement(v.a,{className:"justify-content-md-center"},c.a.createElement(x.a,null,c.a.createElement("h3",{class:"text-center"},"On Ramp/ Off Ramp"),c.a.createElement("p",{class:"text-center"},"Please select your chosen On-Ramp/ Off-Ramp for your beneficiaries to transfer your Ether and Ethereum based tokens to their local currency."))),c.a.createElement(v.a,null,c.a.createElement(x.a,null,c.a.createElement("div",{class:"d-flex justify-content-center"},c.a.createElement(w.a,{type:"checkbox",name:"On Ramp/ Off Ramp"},c.a.createElement(k.a,{variant:"outline-dark",onChange:d,value:"/DappData/coinbase.txt"},"Coinbase"),c.a.createElement(k.a,{variant:"outline-dark",onChange:d,value:"/DappData/uphold.txt",disabled:!0},"Uphold"))))),c.a.createElement("br",null),c.a.createElement(v.a,{className:"justify-content-md-center"},c.a.createElement(x.a,null,c.a.createElement("h3",{class:"text-center"},"Wallet and DApp Gateway"),c.a.createElement("p",{class:"text-center"},"Please select a Wallet and Dapp gateway you wish your beneficiaries to use throughout this process. Note: This Wallet and Dapp Gateway must be compatible with the rest of the DApps and Services you have selected."))),c.a.createElement(v.a,null,c.a.createElement(x.a,null,c.a.createElement("div",{class:"d-flex justify-content-center"},c.a.createElement(w.a,{type:"checkbox",name:"Wallet and DApp Gateway"},c.a.createElement(k.a,{variant:"outline-dark",onChange:d,value:"/DappData/metamask.txt"},"MetaMask"))))),c.a.createElement("br",null),c.a.createElement(v.a,{className:"justify-content-md-center"},c.a.createElement(x.a,null,c.a.createElement("h3",{class:"text-center"},"Alternate Wallets"),c.a.createElement("p",{class:"text-center"},"Please select a an Alternate Wallet you wish your beneficiaries to access."))),c.a.createElement(v.a,null,c.a.createElement(x.a,null,c.a.createElement("div",{class:"d-flex justify-content-center"},c.a.createElement(w.a,{type:"checkbox",name:"Alternate Wallets"},c.a.createElement(k.a,{variant:"outline-dark",onChange:d,value:"/DappData/ledger.txt",disabled:!0},"Coming Soon"))))),c.a.createElement("br",null),c.a.createElement(v.a,{className:"justify-content-md-center"},c.a.createElement(x.a,null,c.a.createElement("h3",{class:"text-center"},"DApps and Services"),c.a.createElement("p",{class:"text-center"},"Please select the DApps and Services your beneficiaries will need to interact with in order to retrieve your Ether and Ethereum based tokens."))),c.a.createElement(v.a,null,c.a.createElement(x.a,null,c.a.createElement("div",{class:"d-flex justify-content-center"},c.a.createElement(w.a,{type:"checkbox",name:"DApps and Services"},c.a.createElement(k.a,{variant:"outline-dark",onChange:d,value:"/DappData/compound.txt"},"Compound"),c.a.createElement(k.a,{variant:"outline-dark",onChange:d,value:"/DappData/pooltogether.txt",disabled:!0},"Coming Soon"))))),c.a.createElement("br",null),c.a.createElement(v.a,{className:"justify-content-md-center"},c.a.createElement(x.a,null,c.a.createElement("h3",{class:"text-center"},"Exchanges"),c.a.createElement("p",{class:"text-center"},"Please select your chosen Exchanges for your beneficiaries  to use in order to transfer your Ethereum based tokens to Ether. Within this section there is a \u201cNote for the Author\u201d where you will need to follow the instructions. in order for as many of the tokens to be retrieved as possible."))),c.a.createElement(v.a,null,c.a.createElement(x.a,null,c.a.createElement("div",{class:"d-flex justify-content-center"},c.a.createElement(w.a,{type:"checkbox",name:"Exchanges"},c.a.createElement(k.a,{variant:"outline-dark",onChange:d,value:"/DappData/uniswap.txt"},"Uniswap"))))))},I=a(93),C=a(84),T=a(190);function A(e){return c.a.createElement(T.a,Object.assign({},e,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),c.a.createElement(T.a.Header,{closeButton:!0},c.a.createElement(T.a.Title,{id:"contained-modal-title-vcenter"},"Disclaimer")),c.a.createElement(T.a.Body,null,c.a.createElement("p",{class:"text-break"},"By confirming this .txt file download you are agreeing that Eth-ter-I-Die and associated parties are not liable for any loss of Ether or Ethereum tokens/ assets that may occur during this process."),c.a.createElement("p",{class:"text-break"},"This is a literal \u201cHow to Guide\u201d of removing your Ethereum assets."),c.a.createElement("p",{class:"text-break"},"Do Not save any seed phrase digitally and keep the completed document in a safe place.")),c.a.createElement(T.a.Footer,null,c.a.createElement(C.a,{variant:"primary",type:"submit",onClick:function(){!function(e,t){var n=a(66),l=new Blob([t],{type:"text/plain;charset=utf-8"});n.saveAs(l,e)}("Eth-ter-I-Die.txt",n+i+l)}},"Agree and Download"),c.a.createElement(C.a,{variant:"secondary",onClick:e.onHide},"Close")))}var S=function(){var e=c.a.useState(!1),t=Object(I.a)(e,2),a=t[0],n=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,null,c.a.createElement(x.a,null,c.a.createElement("div",{class:"d-flex justify-content-center"},c.a.createElement(C.a,{variant:"primary",onClick:function(){return n(!0)}},"Download File")),c.a.createElement(A,{show:a,onHide:function(){return n(!1)}}))))},j=a(188),B=a(191),H=a(193),O=a(89),F=a.n(O),P=function(){return c.a.createElement(g.a,{fluid:!0},c.a.createElement(v.a,{className:"justify-content-md-center"},c.a.createElement(x.a,null,c.a.createElement(j.a,{width:"180",className:"rounded mx-auto d-block",src:F.a,alt:"Logo"}))),c.a.createElement(v.a,{className:"justify-content-md-center"},c.a.createElement(x.a,null,c.a.createElement("h1",{class:"text-center"},"Eth-ter-I-Die"),c.a.createElement("p",{class:"text-center"},"Don\u2019t let your Ethereum assets be lost to the blockchain when you die."),c.a.createElement("p",{class:"text-center"},"Eth-ter-I-Die produces a basic introduction to Ethereum and template of instructions for your non-technical beneficiary to convert your Ethereum Tokens, from a variety of different DApps, to Ether and transfer your Ether to their local currency."),c.a.createElement("p",{class:"text-center"},"Additional options/ selections coming soon, please send suggestions to me on ",c.a.createElement(h.c,{to:"https://twitter.com/lu_calm"},"My Twitter"),"."))),c.a.createElement(v.a,null,c.a.createElement(x.a,null,c.a.createElement(B.a,null,c.a.createElement(H.a,null,c.a.createElement(B.a.Toggle,{as:H.a.Header,eventKey:"0"},"Instructions"),c.a.createElement(B.a.Collapse,{eventKey:"0"},c.a.createElement(H.a.Body,null,c.a.createElement("p",null,"Select the DApps and services below that you use, Eth-ter-I-Die generates a .txt file to download with a basic introduction to Ethereum and removal instructions for you to print. Read the document carefully to confirm the instructions are correct and add in any additional comments."),c.a.createElement("p",null,"All private and preference fields are left blank (i.e. __________ ) for you to ",c.a.createElement("kbd",null,"hand write")," once the document is printed."),c.a.createElement("p",null,c.a.createElement("kbd",null,"For your security reasons, DO NOT type in this information and save the document to your computer.")),c.a.createElement("p",null,"From here you need to make sure that document is kept as secure as possible. It is a literal \u201cHow to Guide\u201d of removing your Ethereum assets, you do not want it in the wrong hands."),c.a.createElement("p",null,"For further advice on how best to use Eth-ter-I-Die, check out the ",c.a.createElement(h.c,{to:"/about"},"About section")))))))))},N=function(){return c.a.createElement(g.a,{fluid:!0},c.a.createElement(v.a,null,c.a.createElement(x.a,null,c.a.createElement(B.a,null,c.a.createElement(H.a,null,c.a.createElement(B.a.Toggle,{as:H.a.Header,eventKey:"0"},"Advanced Settings"),c.a.createElement(B.a.Collapse,{eventKey:"0"},c.a.createElement(H.a.Body,null,c.a.createElement("h4",null,"Include/ Exclude Intro and End Sections"),c.a.createElement("p",null,'Chose below if you want to include or exclude the "Intro" and "End" text sections generated by Eth-ter-I-Die. Excluding this content is useful for those using Eth-ter-I-Die for multiple wallets.'),c.a.createElement(v.a,{className:"justify-content-md-center"},c.a.createElement(x.a,{class:"col-sm-offset-3 col-sm-2"},c.a.createElement(C.a,{variant:"success",type:"submit",onClick:function(){u()}},"Include (Default)")),c.a.createElement(x.a,{class:"col-sm-offset-1 col-sm-2"},c.a.createElement(C.a,{variant:"danger",type:"submit",onClick:function(){n="",l="","Empty"}},"Exclude"))))))))))},K=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(P,null),c.a.createElement("br",null),c.a.createElement(D,null),c.a.createElement("br",null),c.a.createElement(S,null),c.a.createElement("br",null),c.a.createElement(N,null))}}]),a}(r.Component),L=(a(104),a(91)),W=a.n(L),_=a(51),G=a.n(_),U=a(92),R=a.n(U),M=_.Search.SearchBar,Y=_.Search.ClearSearchButton,V=[{id:1,name:"Etherscan.io",category:"Blockchain Explorers",dapplink:"https://etherscan.io/",flink:"/DappData/etherscan.txt"},{id:2,name:"Coinbase",category:"On Ramps/ Off Ramps",dapplink:"https://www.coinbase.com/",flink:"/DappData/coinbase.txt"},{id:3,name:"Metamask",category:"Wallet and DApp Gateways",dapplink:"https://metamask.io/",flink:"/DappData/metamask.txt"},{id:4,name:"Introduction Text",category:"Intro",dapplink:"https://eth-ter-i-die.rip/",flink:"/BaseData/intro.txt"},{id:5,name:"End Text",category:"End",dapplink:"https://eth-ter-i-die.rip/",flink:"/BaseData/end.txt"},{id:6,name:"Uniswap",category:"Exchanges",dapplink:"https://uniswap.org/",flink:"/BaseData/uniswap.txt"},{id:7,name:"Compound",category:"DApps and Services",dapplink:"https://compound.finance/",flink:"/BaseData/compound.txt"}],q=[{dataField:"id",text:"Product ID",hidden:!0},{dataField:"name",text:"Product Name",sort:!0},{dataField:"category",text:"Category",sort:!0},{dataField:"dapplink",text:"Website/ DApp Link",formatter:function(e,t,a){return c.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},"Website/ DApp Link")}},{dataField:"flink",text:"File Link",formatter:function(e,t,a){return c.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},"Link to File")}}],Z={pageStartIndex:1,firstPageText:"First",prePageText:"Back",nextPageText:"Next",lastPageText:"Last",nextPageTitle:"First page",prePageTitle:"Pre page",firstPageTitle:"Next page",lastPageTitle:"Last page",showTotal:!0,sizePerPageList:[{text:"5",value:5},{text:"10",value:10},{text:"25",value:25}]},z=function(){return c.a.createElement(G.a,{keyField:"id",data:V,columns:q,search:!0},(function(e){return c.a.createElement("div",null,c.a.createElement(M,e.searchProps),c.a.createElement(Y,e.searchProps),c.a.createElement("hr",null),c.a.createElement(W.a,Object.assign({},e.baseProps,{bootstrap4:!0,striped:!0,hover:!0,pagination:R()(Z)})))}))},J=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"The Files"),c.a.createElement("p",null,"Use the table below to view the text files of the DApp or service you wish to use."),c.a.createElement(z,null))}}]),a}(r.Component),Q=a(194),X=a(13),$=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return c.a.createElement(g.a,null,c.a.createElement("h2",null,"Support Eth-ter-I-Die"),c.a.createElement(B.a,null,c.a.createElement(H.a,null,c.a.createElement(B.a.Toggle,{as:H.a.Header,eventKey:"0"},"Donation"),c.a.createElement(B.a.Collapse,{eventKey:"0"},c.a.createElement(H.a.Body,null,c.a.createElement("p",{class:"text-center"},"I strongly believe Eth-ter-I-Die should be a free service for all of the Ethereum community to benefit from. However there are costs associated in keeping it running and improving."),c.a.createElement("p",{class:"text-center"},"If you are happy with this service and want to support future features, a donation would be greatly appreciated. Thank you","  "," ",c.a.createElement("span",{"aria-label":"Beaming Smiley Face",role:"img"},"\ud83d\ude0a")),c.a.createElement("p",{class:"text-center"},"Donation Address: 0xa28910bcbe9a1b9119940343c02cae65c1b22cc5"),c.a.createElement("p",{class:"text-center"},c.a.createElement(Q.a,{to:"https://etherscan.io/address/0xa28910bcbe9a1b9119940343c02cae65c1b22cc5"},"View on Etherscan"))))),c.a.createElement(H.a,null,c.a.createElement(B.a.Toggle,{as:H.a.Header,eventKey:"1"},"Development"),c.a.createElement(B.a.Collapse,{eventKey:"1"},c.a.createElement(H.a.Body,null,c.a.createElement("p",{class:"text-center"},"Bear with me, I have a full time job but I do I work on Eth-ter-I-Die as and when I can."),c.a.createElement("p",{class:"text-center"},"I will keep adding new DApps, services and features for the betterment for it to be more useful for more people."),c.a.createElement("p",{class:"text-center"},"I am quite new to coding so it is a bit of a learning curve! If you would like to help improve the shambles of code I have written, here is the GitHub account."),c.a.createElement("p",{class:"text-center"},c.a.createElement(X.SocialIcon,{url:"https://github.com/lu-calm/eth-ter-i-die",bgColor:"#000000"})),c.a.createElement("p",{class:"text-center"},"You can witness my struggles of the development process on my YouTube channel.  "),c.a.createElement("p",{class:"text-center"},c.a.createElement(X.SocialIcon,{url:"https://www.youtube.com/channel/UC9GTIw90lZei5mUfjmTf7fg",bgColor:"#000000"}))))),c.a.createElement(H.a,null,c.a.createElement(B.a.Toggle,{as:H.a.Header,eventKey:"2"},"Feedback and Suggestions (including new DApp requests)"),c.a.createElement(B.a.Collapse,{eventKey:"2"},c.a.createElement(H.a.Body,null,c.a.createElement("p",{class:"text-center"},"If you have some feedback or suggestions for Eth-ter-I-Die, please contact me via twitter."),c.a.createElement("p",{class:"text-center"},"Also let me know, via twitter, if you have any requests for new DApps or services to be added to Eth-ter-I-Die. I will try my best to add them ASAP!"),c.a.createElement("p",{class:"text-center"},"Anyway, cheers for reading all of this, I hope you have a great day."),c.a.createElement("p",{class:"text-center"},c.a.createElement(X.SocialIcon,{url:"https://twitter.com/lu_calm",bgColor:"#000000"})))))))}}]),a}(r.Component),ee=function(){return c.a.createElement("div",null,c.a.createElement("p",{class:"text-center"},c.a.createElement(X.SocialIcon,{url:"https://twitter.com/lu_calm",bgColor:"#000000"})," ","  ",c.a.createElement(X.SocialIcon,{url:"https://www.youtube.com/channel/UC9GTIw90lZei5mUfjmTf7fg",bgColor:"#000000"}),"  ",c.a.createElement(X.SocialIcon,{url:"https://github.com/lu-calm",bgColor:"#000000"})," ","  "))},te=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(f.a)(a,[{key:"render",value:function(){return c.a.createElement(g.a,null,c.a.createElement("h4",null,"What's this all about then?"),c.a.createElement(B.a,null,c.a.createElement(H.a,null,c.a.createElement(B.a.Toggle,{as:H.a.Header,eventKey:"4"},"Latest News and Updates"),c.a.createElement(B.a.Collapse,{eventKey:"4"},c.a.createElement(H.a.Body,null,c.a.createElement("p",null,c.a.createElement("dl",null,c.a.createElement("dt",null,"30/08/2020"),c.a.createElement("dd",null,"Additonal content added"),c.a.createElement("dd",null,"- MetaMask"),c.a.createElement("dd",null,"- Uniswap"),c.a.createElement("dd",null,"- Website content improved")))))),c.a.createElement(H.a,null,c.a.createElement(B.a.Toggle,{as:H.a.Header,eventKey:"0"},"Story Time"),c.a.createElement(B.a.Collapse,{eventKey:"0"},c.a.createElement(H.a.Body,null,c.a.createElement("p",{class:"text-break"},"Well done."),c.a.createElement("p",{class:"text-break"},"You have started accumulating Ethereum and Ethereum based tokens. You have great foresight, however, not enough to see the Number 42 bus when you cross the road tomorrow morning at 8:14am."),c.a.createElement("p",{class:"text-break"},"You have ceased to be, bereft of life, you rest in peace, you have kicked the bucket, hopped the twig, bit the dust, snuffed it, breathed your last, and gone to meet the Great Head of Blockchain Technologies in the sky."),c.a.createElement("p",{class:"text-break"},"So, what is going to happen to your Ethereum assets now?"),c.a.createElement("p",{class:"text-break"},"Your hardware wallet is passed over as a malfunctioning USB and recycled as e-waste."),c.a.createElement("p",{class:"text-break"},"Your wallet seed phrase, kept on a crumpled note, is overlooked as nonsense and recycled."),c.a.createElement("p",{class:"text-break"},"Who\u2019s going to benefit from all the time and money you\u2019ve invested in Ethereum; all that learning, developing and acquiring?  Currently the refuge collector is the odds-on favourite but likely the worth you have created will be lost forever. It will be your anonymous blockchain memorial to what might have been."),c.a.createElement("p",{class:"text-break"},"This does not have to be the case."),c.a.createElement("h4",null," I present to you Eth-ter-I-Die!")))),c.a.createElement(H.a,null,c.a.createElement(B.a.Toggle,{as:H.a.Header,eventKey:"1"},"Assumptions, Advice and Tips"),c.a.createElement(B.a.Collapse,{eventKey:"1"},c.a.createElement(H.a.Body,null,c.a.createElement("p",{class:"text-break"},"- The generated template will inform your loved ones on how to transfer your Ethereum assets to Ether first and then to fiat. This is in order to reduced complexity and minimise confusion."),c.a.createElement("p",{class:"text-break"},"- The content has been kept as concise as possible for the instructions to be followed as safely as possible. Some principles of Ethereum have been omitted for the purposed of reducing complexity. If you have suggestions of content improvements please contact me on ",c.a.createElement(h.c,{to:"https://twitter.com/lu_calm"},"My Twitter"),"."),c.a.createElement("p",{class:"text-break"},"- It is assumed you have enough Ether/ Gwei in your account to cover the transaction fees."),c.a.createElement("p",{class:"text-break"},"- Content for all the selections can be found in ",c.a.createElement(h.c,{to:"/textfiles"},"The Files section"),"."),c.a.createElement("p",{class:"text-break"},"- Please make your handwriting as easy to read as possible."),c.a.createElement("p",{class:"text-break"},"- Additional wallets can be accommodated by re-doing the form for each wallet. You can remove the Intro and End text by clicking on advanced settings and clicking the \u201cExclude\u201d button. Or you can edit the .txt file to accommodate for additional wallet instructions."),c.a.createElement("p",{class:"text-break"},"- If possible, go through the document and process with your loved ones before you perish with a test wallet.")))),c.a.createElement(H.a,null,c.a.createElement(B.a.Toggle,{as:H.a.Header,eventKey:"2"},"Who Created This?"),c.a.createElement(B.a.Collapse,{eventKey:"2"},c.a.createElement(H.a.Body,null,c.a.createElement("p",null,"I did! Hello! My name is L\xfc Calm  ","  ",c.a.createElement("span",{"aria-label":"Beaming Smiley Face",role:"img"},"\ud83d\ude0a")),c.a.createElement("p",null,"Eth-ter-I-Die is my first attempt at a coding project."),c.a.createElement("p",null,"I was researching a method of how my Mum could benefit from my research and investments in Ethereum if I die. Something that would help explain key concepts so she can run through the process herself. I couldn\u2019t find anything that really fit the bill. So I decided to make it myself! Not knowing how to code initially didn\u2019t stop me and Eth-ter-I-Die is the result."),c.a.createElement("p",null,"I use Eth-ter-I-Die myself and initially I am adding the DApps and services I use in order to create my \u201cHow to retrieve my Ethereum Assets when I Die\u201d Guide. Now I am adding DApps and services that other people want to see added so it can help them too."),c.a.createElement("p",null,"I am seeing first hand how complicated Ethereum and its ecosystem is for the less technologically minded. I believe we need to make it easier for our loved ones to understand this technology so they can benefit when we die. Hence I will keep improving Eth-ter-I-Die as best as I can for as long as I can."),c.a.createElement("p",null,"Anyway, you can see the painstaking process to get to this stage via my Eth-ter-I-Die Development YouTube playlist below.              "),c.a.createElement("p",{class:"text-center"},c.a.createElement(X.SocialIcon,{url:"https://www.youtube.com/playlist?list=PLW-TtH0Ie84bBTkv1cVVI0L_7kLRZ-UmY",bgColor:"#000000"})),c.a.createElement("p",null,"Here are all of my social links to learn more about updates to Eth-ter-I-Die, upcoming projects or contact me."),c.a.createElement(ee,null)))),c.a.createElement(H.a,null,c.a.createElement(B.a.Toggle,{as:H.a.Header,eventKey:"3"},"Feature Roadmap"),c.a.createElement(B.a.Collapse,{eventKey:"3"},c.a.createElement(H.a.Body,null,c.a.createElement("p",null,"Eth-ter-I-Die is constantly under development if you want to help out head to ",c.a.createElement(h.c,{to:"https://github.com/lu-calm/eth-ter-i-die"},"The GitHub")," "),c.a.createElement("p",null,"Here are some planned feature to Eth-ter-I-Die for the short and long term"),c.a.createElement("p",null,c.a.createElement("dl",null,c.a.createElement("dt",null,"Short Term"),c.a.createElement("dd",null,"- Add Ledger Hardware Wallet instructions (just saving up for one...)"),c.a.createElement("dd",null,"- Add MakerDao DApp instructions"),c.a.createElement("dd",null,"- Add OpenSea DApp instructions"),c.a.createElement("dd",null,"- Add more DApp and Service instructions!"),c.a.createElement("dt",null,"Long Term"),c.a.createElement("dd",null,"- Make decentralised (currently hosted on GitHub Pages...)"),c.a.createElement("dd",null,"- Add Language Support"),c.a.createElement("dd",null,'- Add "Create Dapp Instructions submission" form')))))),c.a.createElement(H.a,null,c.a.createElement(B.a.Toggle,{as:H.a.Header,eventKey:"5"},"Archived News"),c.a.createElement(B.a.Collapse,{eventKey:"5"},c.a.createElement(H.a.Body,null,c.a.createElement("p",null,c.a.createElement("dl",null,c.a.createElement("dt",null,"14/08/2020"),c.a.createElement("dd",null,"Alpha version released"),c.a.createElement("dt",null,"13/08/2020"),c.a.createElement("dd",null,"There is no previous news or updates..."))))))))}}]),a}(r.Component),ae=(a(167),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.b,null,c.a.createElement("div",null,c.a.createElement("h1",null,"Eth-ter-I-Die"),c.a.createElement("ul",{className:"header"},c.a.createElement("li",null,c.a.createElement(h.c,{exact:!0,to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(h.c,{to:"/about"},"About")),c.a.createElement("li",null,c.a.createElement(h.c,{to:"/textfiles"},"The Files")),c.a.createElement("li",null,c.a.createElement(h.c,{to:"/support"},"Support"))),c.a.createElement("div",{className:"content"},c.a.createElement(p.a,{exact:!0,path:"/",component:K}),c.a.createElement(p.a,{path:"/about",component:te}),c.a.createElement(p.a,{path:"/textfiles",component:J}),c.a.createElement(p.a,{path:"/support",component:$})))))}),ne=a(189),le=a(41),re=function(){var e="https://eth-ter-i-die.rip/";return c.a.createElement("div",null,c.a.createElement("p",null,"Share via: ","  ",c.a.createElement(le.Email,{url:e})," ","  ",c.a.createElement(le.Twitter,{url:e,shareText:"Check out Eth-ter-I-Die. Use it to guide your loved ones to your Ethereum assets after you have popped your clogs!"}),"  ",c.a.createElement(le.Reddit,{url:e}),"  ",c.a.createElement(le.Facebook,{url:e})))},ce=function(){return c.a.createElement("div",null,c.a.createElement("p",null,"Contact: ","  ",c.a.createElement(X.SocialIcon,{url:"https://twitter.com/lu_calm",bgColor:"#000000",style:{height:35,width:35}})," ","  ",c.a.createElement(X.SocialIcon,{url:"https://github.com/lu-calm/eth-ter-i-die",bgColor:"#000000",style:{height:35,width:35}})," ","  ",c.a.createElement(X.SocialIcon,{url:"https://www.youtube.com/playlist?list=PLW-TtH0Ie84bBTkv1cVVI0L_7kLRZ-UmY",bgColor:"#000000",style:{height:35,width:35}})))},oe=function(){return c.a.createElement(ne.a,{fluid:!0},c.a.createElement(g.a,null,c.a.createElement("p",null,c.a.createElement("pre",null,c.a.createElement("span",{"aria-label":"Heart",role:"img"},"\ud83d\udda4")," ","Donation Address: 0xa28910bcbe9a1b9119940343c02cae65c1b22cc5 ",c.a.createElement("small",null,c.a.createElement(Q.a,{to:"https://etherscan.io/address/0xa28910bcbe9a1b9119940343c02cae65c1b22cc5"},"View on Etherscan")))),c.a.createElement("p",null,c.a.createElement(ce,null)),c.a.createElement("p",null,c.a.createElement(re,null))))};window.onload=function(){u()};var se=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(ae,null),c.a.createElement(oe,null))};a(182);s.a.render(c.a.createElement(h.a,{basename:"/lu-calm.github.io"},c.a.createElement(se,null)),document.getElementById("root"))},89:function(e,t,a){e.exports=a.p+"static/media/logoxs.8faf6898.svg"},95:function(e,t,a){e.exports=a(183)}},[[95,1,2]]]);
//# sourceMappingURL=main.432bfca7.chunk.js.map