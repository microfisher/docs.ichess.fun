<template><div><h1 id="practicing-with-the-test-network" tabindex="-1"><a class="header-anchor" href="#practicing-with-the-test-network" aria-hidden="true">#</a> Practicing with the Test Network</h1>
<p>An Ethereum <strong>test network</strong> (<code v-pre>testnet</code> for short) is an Ethereum blockchain, functionally identical to the standard Ethereum blockchain, but it's intended to be used for testing smart contracts before they go live onto the main &quot;real&quot; blockchain (called <code v-pre>mainnet</code>).
Testnets run in parallel with mainnet - there are actually several of them running right now!</p>
<p>You can read more about some of the ETH1 testnets <a href="https://support.mycrypto.com/how-to/getting-started/where-to-get-testnet-ether" target="_blank" rel="noopener noreferrer">here<ExternalLinkIcon/></a> if you like.
Kele Pool uses <strong>Goerli</strong> for its ETH1 testnet.
You can use a block explorer for it here if you'd like to take a look at it: <a href="https://goerli.etherscan.io/" target="_blank" rel="noopener noreferrer">https://goerli.etherscan.io/<ExternalLinkIcon/></a></p>
<p>The same concept applies to the ETH2 chain as well.
Kele Pool uses <strong>Prater</strong> for its ETH2 testnet.
You can find a block explorer for it here: <a href="https://prater.beaconcha.in/" target="_blank" rel="noopener noreferrer">https://prater.beaconcha.in/<ExternalLinkIcon/></a></p>
<p>Because the networks are intended for testing, <strong>ETH on them is given out for free to help people test</strong>.
This ETH <strong>cannot be transferred</strong> to mainnet; it must stay on Goerli and has no real value, so you can think of it as <strong>Monopoly money</strong>.</p>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p><strong>DO NOT use your real ETH from mainnet at any point if you are trying out Kele Pool's test network!</strong>
You will <strong>lose your funds</strong> forever if you do this!
You should only use test ETH that you received on the Goerli network from a faucet (described below)!</p>
</div>
<h2 id="configuring-the-testnet" tabindex="-1"><a class="header-anchor" href="#configuring-the-testnet" aria-hidden="true">#</a> Configuring the Testnet</h2>
<p><RouterLink to="/guides/node/install-modes.html">The default configuration of Kele Pool using Docker</RouterLink> handles all of the settings involved in using a testnet for you automatically.
There's nothing special you need to do.</p>
<p>If you're using <RouterLink to="/guides/node/install-modes.html">a different setup</RouterLink> with an external ETH1 or ETH2 client, or are running your clients <RouterLink to="/guides/node/install-modes.html">natively without Docker</RouterLink>, then you will need to set this up manually:</p>
<ul>
<li>For <strong>Geth</strong>: add <code v-pre>--goerli</code> to the launch command.</li>
<li>For <strong>Lighthouse</strong>: add <code v-pre>--network prater</code> to the launch command.</li>
<li>For <strong>Nimbus</strong>: add <code v-pre>--network=prater</code> to the launch command.</li>
<li>For <strong>Prysm</strong>: add <code v-pre>--prater</code> to the launch command.</li>
<li>For <strong>Teku</strong>: add <code v-pre>--network=prater</code> to the launch command.</li>
</ul>
<p>Check the next section to learn how to get some test ETH on Goerli, which you'll need to test Kele Pool out.</p>
<h2 id="getting-test-eth-on-goerli" tabindex="-1"><a class="header-anchor" href="#getting-test-eth-on-goerli" aria-hidden="true">#</a> Getting Test ETH on Goerli</h2>
<p>To use the Kele Pool test network, you'll need ETH on Goerli.
Luckily, you can get this for free using a <strong>faucet</strong> - an automated service that will provide you with Goerli ETH to test with.</p>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>You will need to provide an Ethereum address in order to receive test ETH.</p>
<p>If you are just trying to stake your ETH normally and receive rETH, please review the <RouterLink to="/guides/staking/overview.html">Staking Guide</RouterLink> before getting Goerli ETH.
You will be prompted to return here at the appropriate step.</p>
<p>If you are planning to run a node, please go through the <RouterLink to="/guides/node/responsibilities.html">Node Operator Guide</RouterLink> to set up a node and create a new wallet first.
You will be prompted to return here at the appropriate step.</p>
</div>
<p>Kele Pool provides a faucet in its <a href="https://discordapp.com/invite/tCRG54c" target="_blank" rel="noopener noreferrer">Discord server<ExternalLinkIcon/></a>.
Join the server and head to the <code v-pre>#faucet</code> channel in the <code v-pre>TESTNET</code> group.
Here, you can interact with a bot that provides Goerli ETH for testing.</p>
<p>You can type <code v-pre>!help</code> to receive some useful information about how to use the bot, which will provide the following text:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Kele Pool Goerli ETH Bot

Welcome to the Kele Pool Goerli ETH Faucet. See below for my commands.

!goerliEth &lt;address>
Sends 1 goerli eth to the address specified.
Ex: !goerliEth 0x56d389C4E07A48d429035532402301310B8143A0
Purpose: so you can test out UI staking at https://beta.kelepool.net/ and/or register your node.

!nodeOperator &lt;address>
Sends 17 goerli eth to the address specified.
Ex: !nodeOperator 0x56d389C4E07A48d429035532402301310B8143A0
Purpose: so you can set up your 16 goerli eth node.
Note: you must be registered with Kele Pool before requesting.

!help
Shows this message.

!mod
Tags the maintainers of this bot, please use if you are experiencing any issues.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you aren't planning to register a node and just want some ETH to test staking to receive rETH, or if you are planning to register a node but haven't yet, type the following command in the channel:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>!goerliEth &lt;your goerli address>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>without the angle brackets.
If your wallet doesn't have any ETH already, the bot will send your wallet 1 ETH to test with.</p>
<p>If you <em>are</em> planning to run a node, do the following:</p>
<ol>
<li>Start by running the <code v-pre>!goerliEth</code> command above to acquire enough gas to register your node</li>
<li>Register your node (see the <RouterLink to="/guides/node/prepare-node.html">Preparing your Node</RouterLink> page for instructions)</li>
<li>Run the following command to get 16 Goerli ETH so you can create a validator:</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>!nodeOperator &lt;your goerli address>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In order to use <code v-pre>!nodeOperator</code>, the address you provide it <em>must</em> be a registered Kele Pool node.
Therefore, you must follow these 3 steps in that order.</p>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>To prevent abuse, there is a cooldown timer on sending messages in the faucet channel.
Therefore, there will be a delay between when you can run the <code v-pre>!goerliEth</code> and <code v-pre>!nodeOperator</code> commands.
If you want to bypass this, you can always ask for help - someone who has a cooldown available will likely be able to run the command for you.</p>
</div>
<h2 id="getting-test-rpl-on-goerli" tabindex="-1"><a class="header-anchor" href="#getting-test-rpl-on-goerli" aria-hidden="true">#</a> Getting Test RPL on Goerli</h2>
<p>If you're testing out node operation, you'll need some test RPL in addition to test ETH.
To get this, you'll need to use the Smartnode stack's command line interface (CLI) tool.
You'll want to set up the Smartnode stack following the <RouterLink to="/guides/node/responsibilities.html">Node Operator's guide</RouterLink> before collecting RPL from the faucet.</p>
<p>Once your Smartnode CLI is installed and you have a wallet assigned to your node, you can access the built-in RPL faucet.
Use the following command to check on its status:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kelepool faucet status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The output will look like this:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>The faucet has a balance of 1999400.000000 RPL.
You can withdraw 600.000000 RPL (requires a 0.500000 GoETH fee)!
Allowances reset in 26585 blocks.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The faucet is on a timer, so each node operator can only use the faucet once every 4 or 5 days.</p>
<ul>
<li>The <strong>faucet balance</strong> indicates how much RPL is still available.</li>
<li>The <strong>withdraw amount</strong> shows how much RPL you can receive from the faucet during the current cycle.
If you already used the faucet, this line will change to let you know that you can't use it again this cycle.</li>
<li>The <strong>reset</strong> timer shows how long (in blocks) it is until the next cycle, at which point you can use the faucet again.
The amount of time remaining (in seconds) is approximately <code v-pre>this number * 13 seconds per block / 60 seconds</code>.</li>
</ul>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>The RPL faucet charges a 0.5 goerli ETH fee to use it, in order to prevent people from abusing the system.
You'll need to have at least this amount in your node wallet already in order to use it!</p>
</div>
<p>When you're ready to receive RPL from the faucet, use the following command:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kelepool faucet withdraw-rpl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After a short wait, you'll see the following output:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Successfully withdrew 600.000000 RPL from the faucet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will provide you with 600 of the <strong>legacy (v1) RPL</strong> token, which is analogous to the original RPL token on mainnet.
Kele Pool uses a <strong>new (v2) RPL</strong> token which supports the inflation used to reward node operators.</p>
<p>To learn how to swap legacy RPL for new RPL, follow the steps in the <RouterLink to="/guides/node/create-validator.html">Creating a Minipool (ETH2 Validator)</RouterLink> guide.</p>
</div></template>
