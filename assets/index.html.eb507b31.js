import{_ as n,r as i,o as l,c as r,a as e,b as o,d as t}from"./app.da615dbc.js";const s={},h=e("h1",{id:"what-is-eth2-0-staking",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-is-eth2-0-staking","aria-hidden":"true"},"#"),t(" What is ETH2.0 staking?")],-1),d=e("h2",{id:"about-eth2-0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#about-eth2-0","aria-hidden":"true"},"#"),t(" About ETH2.0")],-1),c=e("p",null,"ETH2.0 is an important stage in the transition of ETH from PoW mechanism to PoS mechanism, and the PoS stage can provide users with pledge income. Participating in ETH2.0 requires 32 ETHs and node construction technology to be mortgaged, and the lock-up period is long. In order to lower the threshold for users to participate in pledge, Kele Pool provides users with a one-click pledge service, 100% of the income on the chain is distributed, and ETH can be earned safely.",-1),u={href:"https://kelepool.com/pos/eth/mining",target:"_blank",rel:"noopener noreferrer"},m=t("Kele Pool - Mainnet"),f={href:"https://test-www.kelepool.com/pos/eth/mining",target:"_blank",rel:"noopener noreferrer"},p=t("Kele Pool - Ropsten"),g=e("h2",{id:"stake-\u2265-32-eth",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stake-\u2265-32-eth","aria-hidden":"true"},"#"),t(" Stake \u2265 32 ETH")],-1),_=t("If the user wants to manage the withdrawal key by himself and owns more than 32ETH of tokens at the same time, he can pledge the tokens through a large amount of pledge. Users need to generate a withdrawal key and corresponding withdrawal certificate through a hardware wallet (Ledger) or "),w={href:"https://github.com/ethereum/staking-deposit-cli",target:"_blank",rel:"noopener noreferrer"},k=t("Ethereum official CLI tool"),E=t(", and send the withdrawal certificate to Pledge for the cola mining pool."),b=e("li",null,[e("p",null,"After this method is pledged, the user controls the withdrawal key by himself. After the ETH2.0 withdrawal function is officially launched, the user can withdraw the income and pledge the principal. Cola Mining Pool will charge some service fees as node operation fees, the amount of pledge needs to be an integer multiple of 32+fee, and the fee of each verification node is temporarily 0.05ETH.")],-1),T=e("h2",{id:"stake-32-eth",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#stake-32-eth","aria-hidden":"true"},"#"),t(" Stake \uFF1C 32 ETH")],-1),H=e("ul",null,[e("li",null,[e("p",null,"If the user has insufficient tokens for 32ETH, or does not want to manage the withdrawal key by himself, he can pledge the tokens through a small amount of pledge. After the accumulated amount in the smart contract reaches 32ETH, the cola mining pool will immediately create a verification node.")]),e("li",null,[e("p",null,"Since the small pledge is a multi-party accumulated amount, the withdrawal key of the verification node is managed and maintained by the cola mining pool cold wallet. After the ETH2.0 withdrawal function is officially launched, the cola mining pool will withdraw funds for users.")]),e("li",null,[e("p",null,"Small amount pledge is not a literal small amount. This method supports a minimum pledge of 0.01 ETH and a maximum of unlimited ETH. Cola Mining Pool will charge 10% of the total revenue of users' pledge as a node operating fee.")])],-1);function y(x,v){const a=i("ExternalLinkIcon");return l(),r("div",null,[h,d,c,e("p",null,[e("a",u,[m,o(a)])]),e("p",null,[e("a",f,[p,o(a)])]),g,e("ul",null,[e("li",null,[e("p",null,[_,e("a",w,[k,o(a)]),E])]),b]),T,H])}var I=n(s,[["render",y],["__file","index.html.vue"]]);export{I as default};