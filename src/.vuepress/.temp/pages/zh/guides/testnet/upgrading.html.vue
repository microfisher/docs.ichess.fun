<template><div><h1 id="migrating-the-smartnode-from-previous-beta-tests" tabindex="-1"><a class="header-anchor" href="#migrating-the-smartnode-from-previous-beta-tests" aria-hidden="true">#</a> Migrating the Smartnode from Previous Beta Tests</h1>
<p>If you've been a Kele Pool node operator during our previous beta tests on Medalla or Pyrmont, thank you for helping us improve the protocol and welcome back!
This brief guide will walk you through the process of purging your own beta build and setting up the newest build for either the Prater testnet, or for real staking on mainnet.</p>
<p>::::: tabs
:::: tab Upgrading to the Prater Testnet</p>
<div class="custom-container warning"><p class="custom-container-title">NOTE</p>
<p>You will need to create a new node wallet to interact with the Prater test network.
Re-using a wallet from a previous beta build may result in failures while creating new validators!</p>
</div>
<p>There are three major steps towards upgrading from a beta build to the Prater test network.</p>
<p>First, migrate any goerli ETH you have to a separate wallet.
You can then migrate it back to the new node wallet you create after you reinstall Kele Pool, so you don't need to rely as much on a faucet for goerli ETH.</p>
<p>The easiest way to do this is via Metamask - see the <RouterLink to="/zh/guides/staking/staking.html">rETH staking guide</RouterLink> for a walkthrough of how to set up a new wallet.
You can do this using the following command:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kelepool node send XXX eth 0xabcd1234...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>where <code v-pre>XXX</code> is the amount of goerli ETH to send, and <code v-pre>0xabcd1234...</code> is the address of the new wallet you created.
<strong>Note that you'll need to leave a little bit of ETH behind to pay for the gas used in the transaction!</strong></p>
<p>Next, remove all of the old Docker images and chain data with the following command:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>kelepool service terminate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once this is done, remove the old Kele Pool data and settings folder.
<strong>This will delete your old wallet and your old validators, so make sure you no longer need to save them for anything!</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sudo rm -rf ~/.kelepool
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once this is done, your old beta setup will be cleaned.
You can follow the <RouterLink to="/zh/guides/node/eth-clients.html">Kele Pool installation guide</RouterLink> for a walkthrough on installing and configuring Kele Pool for the Prater testnet.</p>
<p>::::
:::: tab Upgrading to Mainnet</p>
<p><em>Coming soon!</em></p>
<p>::::
:::::</p>
</div></template>
