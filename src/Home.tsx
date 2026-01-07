import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { TrendingUp, TrendingDown, Shield, Zap, Users, BarChart3, Globe, ArrowRight, DollarSign, Activity, Sparkles, Lock, Clock, ChevronRight, Eye, Wallet, CreditCard } from 'lucide-react';

const IoMarketsCom: React.FC = () => {
  const [selectedPair, _setSelectedPair] = useState('BTC/USDT');

  // Mock market data
  const topMarkets = [
    { symbol: 'BTC/USDT', price: '98,234.50', change: '+2.45%', volume: '$45.2B', isUp: true },
    { symbol: 'ETH/USDT', price: '3,845.32', change: '+1.82%', volume: '$28.5B', isUp: true },
    { symbol: 'BNB/USDT', price: '645.21', change: '-0.54%', volume: '$8.2B', isUp: false },
    { symbol: 'SOL/USDT', price: '145.67', change: '+5.23%', volume: '$12.4B', isUp: true },
    { symbol: 'ADA/USDT', price: '0.8234', change: '+3.12%', volume: '$4.8B', isUp: true },
    { symbol: 'AVAX/USDT', price: '42.85', change: '-1.24%', volume: '$3.2B', isUp: false },
  ];

  const orderBookBuys = [
    { price: '98,234.50', amount: '0.5234', total: '51,420.34' },
    { price: '98,233.20', amount: '1.2456', total: '122,345.67' },
    { price: '98,232.00', amount: '0.8765', total: '86,123.45' },
    { price: '98,231.50', amount: '2.3421', total: '230,123.89' },
    { price: '98,230.00', amount: '0.6543', total: '64,234.56' },
  ];

  const orderBookSells = [
    { price: '98,235.50', amount: '0.4321', total: '42,456.78' },
    { price: '98,236.20', amount: '1.5432', total: '151,567.89' },
    { price: '98,237.00', amount: '0.7654', total: '75,234.12' },
    { price: '98,238.50', amount: '2.1234', total: '208,567.34' },
    { price: '98,239.00', amount: '0.8765', total: '86,123.45' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0E11] text-white relative">
      <Helmet>
        <title>IoMarkets® Advanced Cryptocurrency Trading Exchange</title>
        <meta name="title" content="IoMarkets® Advanced Cryptocurrency Trading Exchange" />
        <meta name="description" content="IoMarkets® Advanced Cryptocurrency Trading Exchange. Trade Bitcoin, Ethereum, and other digital assets with institutional-grade security and advanced trading tools." />
        <meta property="og:title" content="IoMarkets® Advanced Cryptocurrency Trading Exchange" />
        <meta property="og:description" content="IoMarkets® Advanced Cryptocurrency Trading Exchange. Trade Bitcoin, Ethereum, and other digital assets with institutional-grade security and advanced trading tools." />
        <meta property="og:site_name" content="IoMarkets®" />
        <meta property="twitter:title" content="IoMarkets® Advanced Cryptocurrency Trading Exchange" />
        <meta property="twitter:description" content="IoMarkets® Advanced Cryptocurrency Trading Exchange. Trade Bitcoin, Ethereum, and other digital assets with institutional-grade security and advanced trading tools." />
      </Helmet>

      {/* Hero Section with Live Trading Interface */}
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5"></div>
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <div className="space-y-6 z-10">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 text-blue-400 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Trusted by 10M+ Traders Worldwide</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Trade Crypto Like a
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Professional
                </span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed">
                Access institutional-grade trading with lightning-fast execution,
                deep liquidity, and bank-level security. Start trading 200+ cryptocurrencies today.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20">
                  Start Trading Now <ArrowRight className="w-5 h-5" />
                </button>
                <button className="bg-[#1E2329] hover:bg-[#2B3139] border border-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  View Demo
                </button>
              </div>

              <div className="flex items-center gap-8 pt-6">
                <div className="flex items-center gap-2 text-gray-400">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-sm">Secure & Insured</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Lock className="w-5 h-5 text-purple-400" />
                  <span className="text-sm">Licensed & Regulated</span>
                </div>
              </div>
            </div>

            {/* Right Column - Live Trading Card */}
            <div className="relative">
              <div className="bg-[#161A1E] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
                {/* Trading Pair Header */}
                <div className="bg-[#1E2329] p-4 border-b border-gray-800">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold">{selectedPair}</span>
                        <ChevronRight className="w-5 h-5 text-gray-500" />
                      </div>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-2xl font-bold text-white">$98,234.50</span>
                        <span className="text-green-400 text-sm font-semibold flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          +2.45%
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">24h Volume</div>
                      <div className="text-lg font-semibold">$45.2B</div>
                    </div>
                  </div>
                </div>

                {/* Mini Order Book */}
                <div className="p-4 space-y-3">
                  <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 font-medium pb-2 border-b border-gray-800">
                    <div>Price (USDT)</div>
                    <div className="text-right">Amount (BTC)</div>
                    <div className="text-right">Total</div>
                  </div>

                  {/* Sell Orders */}
                  {orderBookSells.slice(0, 3).map((order, idx) => (
                    <div key={idx} className="grid grid-cols-3 gap-2 text-sm relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-red-500/5"></div>
                      <div className="text-red-400 font-mono">{order.price}</div>
                      <div className="text-right text-gray-400 font-mono">{order.amount}</div>
                      <div className="text-right text-gray-500 font-mono text-xs">{order.total}</div>
                    </div>
                  ))}

                  {/* Current Price */}
                  <div className="bg-gradient-to-r from-green-500/10 to-transparent border-l-2 border-green-400 px-3 py-2 my-2">
                    <div className="text-green-400 font-bold text-lg font-mono">98,234.50 ↑</div>
                    <div className="text-xs text-gray-400">Last Price</div>
                  </div>

                  {/* Buy Orders */}
                  {orderBookBuys.slice(0, 3).map((order, idx) => (
                    <div key={idx} className="grid grid-cols-3 gap-2 text-sm relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-green-500/5"></div>
                      <div className="text-green-400 font-mono">{order.price}</div>
                      <div className="text-right text-gray-400 font-mono">{order.amount}</div>
                      <div className="text-right text-gray-500 font-mono text-xs">{order.total}</div>
                    </div>
                  ))}
                </div>

                {/* Trade Action Buttons */}
                <div className="grid grid-cols-2 gap-2 p-4 border-t border-gray-800">
                  <button className="bg-green-600 hover:bg-green-500 text-white py-3 rounded-lg font-semibold transition-all">
                    Buy BTC
                  </button>
                  <button className="bg-red-600 hover:bg-red-500 text-white py-3 rounded-lg font-semibold transition-all">
                    Sell BTC
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview Grid */}
      <section className="py-12 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Top Markets</h2>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1">
              View All Markets <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {topMarkets.map((market, index) => (
              <div key={index} className="bg-[#161A1E] border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-all cursor-pointer">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold">
                      {market.symbol.split('/')[0].slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-semibold">{market.symbol}</div>
                      <div className="text-xs text-gray-500">{market.symbol.split('/')[1]}</div>
                    </div>
                  </div>
                  {market.isUp ? (
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-red-400" />
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">${market.price}</span>
                    <span className={`text-sm font-semibold ${market.isUp ? 'text-green-400' : 'text-red-400'}`}>
                      {market.change}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">24h Volume</span>
                    <span className="text-gray-300 font-medium">{market.volume}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Trading Chart */}
      <section className="py-12 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Advanced Trading Chart</h2>
            <p className="text-gray-400">Professional trading tools powered by TradingView</p>
          </div>
          <div className="bg-[#161A1E] rounded-xl border border-gray-800 overflow-hidden">
            <div className="bg-[#1E2329] px-6 py-3 border-b border-gray-800 flex items-center gap-6">
              <button className="text-white font-medium border-b-2 border-blue-500 pb-2">Chart</button>
              <button className="text-gray-400 hover:text-white font-medium pb-2">Order Book</button>
              <button className="text-gray-400 hover:text-white font-medium pb-2">Recent Trades</button>
            </div>
            <div style={{ height: "600px", width: "100%" }}>
              <div className="h-[600px] bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">Trading Chart Coming Soon</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Trade on IoMarkets</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience institutional-grade trading with features designed for both beginners and professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Bank-Level Security",
                description: "Multi-signature cold storage, 2FA, and $500M insurance coverage protecting your assets 24/7.",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Zap,
                title: "Ultra-Fast Execution",
                description: "Industry-leading matching engine processing 1.4M transactions/second with sub-10ms latency.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: BarChart3,
                title: "Advanced Trading Tools",
                description: "Professional charting, 100+ indicators, algorithmic trading, and API access for automation.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Globe,
                title: "Deep Liquidity",
                description: "Access to aggregated liquidity from multiple sources ensuring best prices and minimal slippage.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: DollarSign,
                title: "Competitive Fees",
                description: "Industry-lowest trading fees starting at 0.1% with volume discounts up to 0.02% for VIP traders.",
                color: "from-indigo-500 to-blue-500"
              },
              {
                icon: Users,
                title: "24/7 Expert Support",
                description: "Multilingual support team available round-the-clock via live chat, email, and phone.",
                color: "from-red-500 to-rose-500"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-[#161A1E] border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: Activity,
                number: "$2.5B+",
                label: "24h Trading Volume",
                color: "text-blue-400"
              },
              {
                icon: Globe,
                number: "200+",
                label: "Listed Cryptocurrencies",
                color: "text-green-400"
              },
              {
                icon: Users,
                number: "10M+",
                label: "Active Traders",
                color: "text-purple-400"
              },
              {
                icon: Shield,
                number: "99.9%",
                label: "Platform Uptime",
                color: "text-orange-400"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className={`w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start Trading in Minutes
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Join millions of traders worldwide and experience the most advanced cryptocurrency trading platform.
              Sign up now and get up to $100 in trading bonuses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                <Wallet className="w-5 h-5" />
                Create Free Account
              </button>
              <button className="bg-[#1E2329] hover:bg-[#2B3139] border border-gray-700 text-white px-10 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                <CreditCard className="w-5 h-5" />
                Buy Crypto Instantly
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>No deposit fees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Instant verification</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span>24/7 customer support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IoMarketsCom;
