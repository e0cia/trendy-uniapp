

<template>
  <view  class="policy  tn-safe-area-inset-bottom">
    <!-- 顶部自定义导航 -->
    <tn-nav-bar class='back-go' :isBack="true" fixed alpha customBack>
      <view slot="back" class='tn-custom-nav-bar__back' @click="goBack">
        <text class='icon tn-icon-left-arrow'></text>
      </view>
      <view class="tn-flex tn-flex-col-center tn-flex-row-center">
        <text class="tn-text-xl tn-color-white">隐私协议</text>
      </view>
    </tn-nav-bar>
    <!-- 其他页面内容 -->
    <view  style="padding: 10px;color: #FFFFFF"  :style="{paddingTop: vuex_custom_bar_height + 5 + 'px'}">
      <div class="lake-content">
        <p id="u01262b0c" class="ne-p"><span class="ne-text">本个人信息保护指引将帮助您了解以下内容：</span></p>
        <p id="ud5b666ee" class="ne-p"><span class="ne-text">一、适用范围</span></p>
        <p id="u2a669f6c" class="ne-p"><span class="ne-text">二、我们如何收集和使用您的信息</span></p>
        <p id="ua243cdbd" class="ne-p"><span class="ne-text">三、我们如何对外提供信息</span></p>
        <p id="u82f3a4dd" class="ne-p"><span class="ne-text">四、您的权利</span></p>
        <p id="udaddd21d" class="ne-p"><span class="ne-text">五、信息的存储</span></p>
        <p id="u09fe0a73" class="ne-p"><span class="ne-text">六、本指引如何更新</span></p>
        <p id="ud1fa66b2" class="ne-p"><span class="ne-text">七、未成年人保护</span></p>
        <p id="u48b1938c" class="ne-p"><span class="ne-text">八、如何联系我们</span></p>
        <p id="u4646037e" class="ne-p"><span class="ne-text">附</span><span class="ne-text">1：相关定义</span></p>
        <p id="ua45c31d7" class="ne-p"><span class="ne-text">附</span><span class="ne-text">2：《第三方合作SDK服务列表及其隐私政策链接明细表》 </span></p>
        <p id="u4f0b2314" class="ne-p"><span class="ne-text">一、适用范围</span></p>
        <p id="u3fa9ebb9" class="ne-p"><span class="ne-text">本指引适用于</span><span class="ne-text">卡卡部落</span><span class="ne-text">服务提供者以网站、客户端、小程序以及随技术发展出现的新形态向您提供的各项产品和服务。如我们及关联公司的产品或服务中使用了</span><span class="ne-text">卡卡部落</span><span class="ne-text">的产品或服务（例如使用</span><span class="ne-text">卡卡部落</span><span class="ne-text">平台账户登录），但未设独立个人信息保护指引的，则本指引同样适用于该部分产品或服务。我们及关联公司就其向您提供的产品或服务单独设有个人信息保护指引的，则相应产品或服务适用相应个人信息保护指引。</span></p>
        <p id="ua6f622e8" class="ne-p"><span class="ne-text">除本指引说明的相关信息收集使用活动外，本指引不适用于第三方向您提供的其他服务，其他服务适用其向您另行说明的个人信息收集使用规则。例如，您在使用淘宝网相关产品和服务时适用《淘宝网隐私指引》以及同意将淘宝账户相关信息授权给</span><span class="ne-text">卡卡部落</span><span class="ne-text">的《用户授权协议》等协议或规则。</span></p>
        <p id="uee36bfb4" class="ne-p"><span class="ne-text">二、我们如何收集和使用您的信息</span></p>
        <p id="udef754ba" class="ne-p"><span class="ne-text">为实现向您提供我们产品或服务的基本功能，您应授权我们收集、使用的必要的信息。您可能需要提供联系邮箱、联系电话、支付宝账号并选择付款方式等。如果我们委托第三方向您提供服务时，我们会在征得您同意后将上述信息共享给第三方。如果您拒绝提供此类信息，您可能将无法充分的使用我们的产品或服务。</span></p>
        <p id="u10eee990" class="ne-p"><span class="ne-text">为实现向您提供我们产品及</span><span class="ne-text">/或服务的附加功能，您可选择授权我们收集、使用的信息。如您拒绝提供，您将无法正常使用相关附加功能或无法达到我们拟达到的功能效果，但并不会影响您正常使用我们产品或服务的基本功能。</span></p>
        <p id="u921cd851" class="ne-p"><span class="ne-text">我们会根据本指引所述的以下具体功能场景，收集和使用您的个人信息：</span></p>
        <p id="u364f8b9d" class="ne-p"><span class="ne-text">（一）帮助您进行用户注册及账户管理</span></p>
        <p id="u8ecac891" class="ne-p"><span class="ne-text">1.用户注册</span></p>
        <p id="uc7ef411a" class="ne-p"><span class="ne-text">我们基于</span><span class="ne-text">卡卡部落</span><span class="ne-text">平台账户为您提供服务。为了创建</span><span class="ne-text">卡卡部落</span><span class="ne-text">平台账户您需要至少向我们提供您的手机号码、拟使用的会员昵称和密码。如果您拒绝提供上述信息，您将无法注册</span><span class="ne-text">卡卡部落</span><span class="ne-text">平台账户。此外，您可以设置并修改昵称和头像；您设置的昵称和头像将公开显示。</span></p>
        <p id="u41a24ce8" class="ne-p"><span class="ne-text">2.账户绑定</span></p>
        <p id="uec6bec40" class="ne-p"><span class="ne-text">我们可能会根据您的单独同意从第三方处获取您的第三方账户信息，并与您的</span><span class="ne-text">卡卡部落</span><span class="ne-text">平台账户进行绑定，以便您使用我们的产品及</span><span class="ne-text">/或服务。我们将在您单独同意的授权范围内使用您的相关信息。</span></p>
        <p id="u348bbcce" class="ne-p"><span class="ne-text">（二）向您提供产品或服务</span></p>
        <p id="u7f48bd6e" class="ne-p"><span class="ne-text">为向您提供更契合您需求的页面展示和搜索结果、了解产品适配性、识别账号异常状态，我们会收集关于您使用的产品或服务以及使用方式的信息并将这些信息进行关联，这些信息包括：</span></p>
        <p id="u89e8c400" class="ne-p"><span class="ne-text">设备信息：我们会根据您在软件安装及使用中授予的具体权限，接收并记录您所使用的设备相关信息，包括设备标识符</span><span class="ne-text">(IMEI、IDFA、AndroidID、 MAC、OAID、IMSI及其他设备相关信息)、应用信息（应用崩溃信息、通知开关状态、应用安装列表及其他应用相关信息）、设备参数及系统信息（设备类型、设备型号、操作系统及硬件相关信息）、设备所在位置相关信息（包括但不限于IP 地址、GPS位置以及能够提供相关信息的Wi-Fi 接入点、蓝牙和基站的传感器信息）。以产品实际采集情况为准。</span></p>
        <p id="u2eafe5a8" class="ne-p"><span class="ne-text">日志信息：当您使用</span><span class="ne-text">卡卡部落</span><span class="ne-text">的产品或服务时，我们会自动收集您对我们产品或服务的详细使用情况，作为有关网络日志保存。包括您的搜索查询内容、</span><span class="ne-text">IP地址、浏览器的类型、电信运营商、使用的语言、访问日期和时间及您访问的网页记录。</span></p>
        <p id="u5b543ef9" class="ne-p"><span class="ne-text">相册信息：当您需要使用扫一扫、识图搜索、保存图片、修改头像、意见反馈及投诉等功能时，您可以选择开启设备相机</span><span class="ne-text">/摄像头权限、访问相册权限以及存储权限，以便访问、上传设备中的图片，或保存图片到本地。</span></p>
        <p id="u24435667" class="ne-p"><span class="ne-text">定位信息：我们会在您开启位置权限后访问获取您的位置信息，根据您的位置信息为您提供更契合您需求的页面展示、产品及</span><span class="ne-text">/或服务，比如向您推荐附近的优惠信息。</span></p>
        <p id="ucb84ed73" class="ne-p"><span class="ne-text">日历信息：在您开启我们可读取</span><span class="ne-text">/写入您日历的权限后，我们将收集您的日历信息用于向您领取相关权益或完成相关操作提醒。</span></p>
        <p id="u1fef5cfa" class="ne-p"><span class="ne-text">订单信息：为了更好地为您提供平台服务或使用指导，根据您与购物平台、我们与购物平台间的有效协议或授权，您同意我们向您展示与</span><span class="ne-text">/或展示您的/与您相关的并已匿名化处理或已去标识化处理的（即第三方在不借助额外信息的情况无法识别您的个人信息）订单信息。</span></p>
        <p id="u611a7903" class="ne-p"><span class="ne-text">请注意，您开启的任一权限即代表您授权我们可以收集和使用相关个人信息来为您提供对应服务，您一旦关闭任一权限即代表您取消了权限，我们将不再基于对应权限继续收集和使用相关个人信息，也无法为您提供该权限所对应的服务。但是，您关闭权限的决定不会影响此前基于您授权所进行的信息收集及使用。</span></p>
        <p id="uffd110a7" class="ne-p"><span class="ne-text">我们在此特别提醒您：</span></p>
        <p id="u572a0954" class="ne-p"><span class="ne-text">（</span><span class="ne-text">1）我们致力于打造多样的产品和服务以满足您的需求。因我们向您提供的产品和服务种类众多，且不同用户选择使用的具体产品/服务范围存在差异，相应的，基本或附加功能及收集使用的个人信息类型、范围等会有所区别，请以具体的产品或服务功能为准；</span></p>
        <p id="u9f70138b" class="ne-p"><span class="ne-text">（</span><span class="ne-text">2）您通过</span><span class="ne-text">卡卡部落</span><span class="ne-text">跳转至各大购物平台购买您所选定的商品或服务时，您向第三方购物平台提供的个人信息将受您与购物平台订立的用户协议或隐私协议所约束和保护。您可通过购物平台相应的用户授权协议授权我们获取您在购物平台的订单信息以及支付信息。</span></p>
        <p id="u97719fb2" class="ne-p"><span class="ne-text">（</span><span class="ne-text">3）我们为您提供智能搜索商品或商品优惠券相关功能，即在您进行智能搜索、分享或接收被分享信息等使用场景下，我们需要访问您的剪贴板并读取其中包含的商品或商品优惠的口令、分享码、链接等信息，以实现分享、跳转等功能服务。您可以选择点击页面的</span><span class="ne-text">“</span><span class="ne-text">关闭</span><span class="ne-text">”</span><span class="ne-text">选项，点击</span><span class="ne-text">“</span><span class="ne-text">关闭</span><span class="ne-text">”</span><span class="ne-text">视为放弃对剪贴板信息的自动搜索，</span><span class="ne-text">卡卡部落</span><span class="ne-text">将不会进行信息保存或利用。</span></p>
        <p id="uae2059a5" class="ne-p"><span class="ne-text">（</span><span class="ne-text">4）单独的设备信息、日志信息等是无法识别特定自然人身份的信息。如果我们将这类非个人信息与其他信息结合用于识别特定自然人身份，或者将其与个人信息结合使用，则在结合使用期间，这类非个人信息将被视为个人信息，除取得您授权或法律法规另有规定外，我们会将该类个人信息做匿名化或去标识化处理；</span></p>
        <p id="u572722cd" class="ne-p"><span class="ne-text">（</span><span class="ne-text">5）若我们从第三方处间接获取您的信息的，我们会在收集前要求该第三方说明其个人信息来源，以及是否已经就其收集、处理以及向我们提供您的个人信息取得了您的合法授权。除法律明确允许的情形外，我们只会在确认第三方已经取得您的授权同意后再从第三方收集您的个人信息，如果第三方的授权范围无法涵盖我们的处理和使用目的时，我们会自行或者要求该第三方征得您的同意后再行处理您的个人信息。同时，我们的专业安全团队对个人信息会进行安全加固（包括敏感信息报备、敏感信息加密存储、访问权限控制等）。我们会使用不低于我们对自身用户个人信息同等的保护手段与措施对间接获取的个人信息进行保护。</span></p>
        <p id="u398856ca" class="ne-p"><span class="ne-text">（</span><span class="ne-text">6）为给您带来更好的产品和服务体验，我们在持续努力改进我们的产品、服务及技术，随之我们可能会不时推出新的或优化后的功能，可能需要收集、使用新的个人信息或变更个人信息使用目的或方式。如发生上述情形，我们将通过更新本指引、弹窗、页面提示等方式另行向您详细说明，并为您提供自主选择同意的方式，且在征得您明示同意后再开始收集、使用。在此过程中，如果您有任何疑问、意见或建议的，您可通过本指引文末联系方式与我们联系，我们会尽快为您作出解答。</span></p>
        <p id="ub64e02af" class="ne-p"><span class="ne-text">（三）为您提供安全保障</span></p>
        <p id="u9cf02c63" class="ne-p"><span class="ne-text">请注意，为确保您身份真实性、向您提供更好的安全保障，您可以向我们提供身份证、军官证、护照、驾驶证、社保卡、居住证的身份信息完成有关事项的实名认证。</span></p>
        <p id="ub98fe47e" class="ne-p"><span class="ne-text">为提高您使用我们及合作伙伴提供服务的安全性，保护您或其他用户或公众的人身财产安全免遭侵害，更好地预防钓鱼网站、欺诈、网络漏洞、计算机病毒、网络攻击、网络侵入等安全风险，更准确地识别违反法律法规或</span><span class="ne-text">卡卡部落</span><span class="ne-text">相关协议规则的情况，我们可能使用或整合您的会员信息、交易信息、设备信息、有关网络日志以及我们、合作伙伴取得您授权或依据法律共享的信息，来综合判断您账户及交易风险、进行身份验证、检测及防范安全事件，并依法采取必要的记录、审计、分析、处置措施。</span></p>
        <p id="ud9151037" class="ne-p"><span class="ne-text">（四）帮助您完成提现及纳税认证</span></p>
        <p id="u6a3990d9" class="ne-p"><span class="ne-text">为协助您将合格推广收益提现，您需要提供并绑定收款账户信息并提供账户对应的真实姓名。收款账户信息指支付宝账户信息、银行账号信息或其他收款账户信息，具体以提现功能页面展示为准。收款账户信息属于个人敏感信息，我们将采取相应严格措施保护您的信息安全。为实现相关功能，我们会将您的</span><span class="ne-text">卡卡部落</span><span class="ne-text">平台账户会员名、对应的收款账户信息、收益提现相关信息、账户安全相关设备信息及其他反洗钱法律要求的必要信息通过在网站或客户端中嵌入的支付宝软件工具开发包（软件工具开发包在本指引中简称</span><span class="ne-text">“</span><span class="ne-text">SDK</span><span class="ne-text">”</span><span class="ne-text">）及其他安全方式与支付宝公司共享。</span></p>
        <p id="u92b13fc6" class="ne-p"><span class="ne-text">（五）纳税认证</span></p>
        <p id="uafb807fb" class="ne-p"><span class="ne-text">涉及个人税务相关信息属于个人敏感信息，我们将采取相应严格措施保护您的信息安全。为配合国家税务部门规范税收工作的相关要求，在您提现时，我们会在征得您同意后收集您的身份信息，您的身份信息将用于纳税认证。如果您拒绝提供身份信息，我们将无法向您提供相关提现服务。</span></p>
        <p id="u7a8073fa" class="ne-p"><span class="ne-text">（六）其他用途</span></p>
        <p id="u6e78e361" class="ne-p"><span class="ne-text">我们将信息用于本隐私权指引未载明的其他用途，或者将基于特定目的收集而来的信息用于其他目的时，会事先征求您的同意。</span></p>
        <p id="u0cdd2b6f" class="ne-p"><span class="ne-text">（七）征得授权同意的例外</span></p>
        <p id="ua994cf43" class="ne-p"><span class="ne-text">根据相关法律法规规定，以下情形中收集您的个人信息无需征得您的授权同意：</span></p>
        <p id="u600837b9" class="ne-p"><span class="ne-text">1、与国家安全、国防安全有关的；</span></p>
        <p id="u2dc24498" class="ne-p"><span class="ne-text">2、与公共安全、公共卫生、重大公共利益有关的；</span></p>
        <p id="uc91bdca6" class="ne-p"><span class="ne-text">3、与犯罪侦查、起诉、审判和判决执行等有关的；</span></p>
        <p id="u63f042c7" class="ne-p"><span class="ne-text">4、出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到您本人同意的；</span></p>
        <p id="ueee22aac" class="ne-p"><span class="ne-text">5、所收集的个人信息是您自行向社会公众公开的；</span></p>
        <p id="uac208a87" class="ne-p"><span class="ne-text">6、从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道；</span></p>
        <p id="u626df40f" class="ne-p"><span class="ne-text">7、根据您的要求签订合同所必需的；</span></p>
        <p id="u0d59c494" class="ne-p"><span class="ne-text">8、用于维护所提供的产品或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障；</span></p>
        <p id="u488b0f67" class="ne-p"><span class="ne-text">9、为合法的新闻报道所必需的；</span></p>
        <p id="ue3c3a5d9" class="ne-p"><span class="ne-text">10、学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；</span></p>
        <p id="ud6e532fd" class="ne-p"><span class="ne-text">11、法律法规规定的其他情形。</span></p>
        <p id="u0a87aa06" class="ne-p"><span class="ne-text">如我们停止运营</span><span class="ne-text">卡卡部落</span><span class="ne-text">产品或服务，我们将及时停止继续收集您个人信息的活动，将停止运营的通知以逐一送达或公告的形式通知您，我们并将根据适用法律法规的要求对所持有的个人信息进行删除或匿名化处理。</span></p>
        <p id="u929c6cf4" class="ne-p"><span class="ne-text">三、我们如何对外提供信息</span></p>
        <p id="u3e77f71c" class="ne-p"><span class="ne-text">（一）共享</span></p>
        <p id="u6a739231" class="ne-p"><span class="ne-text">我们不会与</span><span class="ne-text">卡卡部落</span><span class="ne-text">服务提供者以外的公司、组织和个人共享您的个人信息，但以下情况除外：</span></p>
        <p id="u8d221471" class="ne-p"><span class="ne-text">1、在获取明确同意的情况下共享：获得您的明确同意后，我们会与其他方共享您的个人信息。</span></p>
        <p id="ub0e75925" class="ne-p"><span class="ne-text">2、在法定情形下的共享：我们可能会根据法律法规规定、诉讼争议解决需要，或按行政、司法机关依法提出的要求，对外共享您的个人信息。</span></p>
        <p id="u59805e6a" class="ne-p"><span class="ne-text">3、与授权合作伙伴共享：仅为实现本指引中声明的目的，我们的某些服务将由我们和授权合作伙伴共同提供。我们可能会与合作伙伴共享您的某些个人信息，以提供更好的客户服务和用户体验。我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息。我们的合作伙伴无权将共享的个人信息用于与产品或服务无关的其他用途。</span></p>
        <p id="u2576500a" class="ne-p"><span class="ne-text">目前，我们的授权合作伙伴包括以下类型：</span></p>
        <p id="ua9c55181" class="ne-p"><span class="ne-text">（</span><span class="ne-text">1）广告、分析服务类的授权合作伙伴。除非得到您的许可，否则我们不会将您的个人身份信息（指可以识别您身份的信息，例如姓名或电子邮箱，通过这些信息可以联系到您或识别您的身份）与提供广告、分析服务的合作伙伴共享。我们会向这些合作伙伴提供有关其广告覆盖面和有效性的信息，而不会提供您的个人身份信息，或者我们将这些信息进行汇总，以便它不会识别您个人。例如，只有在广告主同意遵守我们的广告发布准则后，我们才可能会告诉广告主他们广告的效果如何，或者有多少人看了他们广告或在看到广告后安装了应用，或者向这些合作伙伴提供不能识别个人身份的统计信息，帮助他们了解其受众或顾客。</span></p>
        <p id="u5ae999e0" class="ne-p"><span class="ne-text">（</span><span class="ne-text">2）供应商、服务提供商和其他合作伙伴。我们将信息发送给支持我们业务的供应商、服务提供商和其他合作伙伴，这些支持包括提供技术基础设施服务、分析我们服务的使用方式、衡量广告和服务的有效性、提供客户服务、支付便利或进行学术研究和调查。</span></p>
        <p id="ufb5fcf51" class="ne-p"><span class="ne-text">为保障我们客户端的稳定运行、功能实现，使您能够使用和享受更多的服务及功能，我们的应用中会嵌入授权合作伙伴的</span><span class="ne-text">SDK或其他类似的应用程序。我们会对授权合作伙伴获取有关信息的应用程序接口（API）、软件工具开发包（SDK）进行严格的安全检测，并与授权合作伙伴约定严格的数据保护措施，令其按照本政策以及其他任何相关的保密和安全措施来处理个人信息。</span></p>
        <p id="u3823fcf0" class="ne-p"><span class="ne-text">您可通过查看《附</span><span class="ne-text">2：第三方合作SDK服务列表及其隐私政策链接明细表》</span></p>
        <p id="u293ca970" class="ne-p"><span class="ne-text">阅览我们接入的</span><span class="ne-text">SDK详情。</span></p>
        <p id="ubed032dc" class="ne-p"><span class="ne-text">对我们与之共享个人信息的公司、组织和个人，我们会与其签署严格的数据保护协议，要求他们按照我们的说明、本指引以及其他任何相关的保密和安全措施来处理个人信息。</span></p>
        <p id="uac2e3a87" class="ne-p"><span class="ne-text">（二）转让</span></p>
        <p id="ua2e291f6" class="ne-p"><span class="ne-text">我们不会将您的个人信息转让给任何公司、组织和个人，但以下情况除外：</span></p>
        <p id="u470e6746" class="ne-p"><span class="ne-text">1、在获取明确同意的情况下转让：获得您的明确同意后，我们会向其他方转让您的个人信息；</span></p>
        <p id="u50332b14" class="ne-p"><span class="ne-text">2、在</span><span class="ne-text">卡卡部落</span><span class="ne-text">服务提供者发生合并、收购或破产清算情形，或其他涉及合并、收购或破产清算情形时，如涉及到个人信息转让，我们会要求新的持有您个人信息的公司、组织继续受本指引的约束，否则我们将要求该公司、组织和个人重新向您征求授权同意。</span></p>
        <p id="u88c89e61" class="ne-p"><span class="ne-text">（三）公开披露</span></p>
        <p id="u560d1432" class="ne-p"><span class="ne-text">我们仅会在以下情况下，公开披露您的个人信息：</span></p>
        <p id="ub23903bd" class="ne-p"><span class="ne-text">1、获得您明确同意或基于您的主动选择，我们可能会公开披露您的个人信息；</span></p>
        <p id="ufddb2806" class="ne-p"><span class="ne-text">2、如果我们确定您出现违反法律法规或严重违反</span><span class="ne-text">卡卡部落</span><span class="ne-text">相关协议规则的情况，或为保护</span><span class="ne-text">卡卡部落</span><span class="ne-text">及其关联公司用户或公众的人身财产安全免遭侵害，我们可能依据法律法规或</span><span class="ne-text">卡卡部落</span><span class="ne-text">相关协议规则披露关于您的个人信息，包括相关违规行为以及</span><span class="ne-text">卡卡部落</span><span class="ne-text">已对您采取的措施。</span></p>
        <p id="ud5fe9c4d" class="ne-p"><span class="ne-text">（四）共享、转让、公开披露个人信息时事先征得授权同意的例外</span></p>
        <p id="ube19cd7d" class="ne-p"><span class="ne-text">以下情形中，共享、转让、公开披露您的个人信息无需事先征得您的授权同意：</span></p>
        <p id="u29b78d47" class="ne-p"><span class="ne-text">1、与国家安全、国防安全有关的；</span></p>
        <p id="uf22c31bb" class="ne-p"><span class="ne-text">2、与公共安全、公共卫生、重大公共利益有关的；</span></p>
        <p id="ucb33c7c3" class="ne-p"><span class="ne-text">3、与犯罪侦查、起诉、审判和判决执行等有关的；</span></p>
        <p id="u4645b0a3" class="ne-p"><span class="ne-text">4、出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；</span></p>
        <p id="uc9e9ccf5" class="ne-p"><span class="ne-text">5、您自行向社会公众公开的个人信息；</span></p>
        <p id="ua72c54fd" class="ne-p"><span class="ne-text">6、从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。</span></p>
        <p id="uc4dace79" class="ne-p"><span class="ne-text">根据法律规定，共享、转让经去标识化处理的个人信息，且确保数据接收方无法复原并重新识别个人信息主体的，不属于个人信息的对外共享、转让及公开披露行为，对此类数据的保存及处理将无需另行向您通知并征得您的同意。</span></p>
        <p id="uff228206" class="ne-p"><span class="ne-text">四、您的权利</span></p>
        <p id="u42826df5" class="ne-p"><span class="ne-text">您可以通过以下方式访问及管理您的个人信息：</span></p>
        <p id="u550b03e7" class="ne-p"><span class="ne-text">（一）访问您的个人信息</span></p>
        <p id="u00d61818" class="ne-p"><span class="ne-text">您有权访问您的个人信息，法律法规规定的例外情况除外。具体访问路径以</span><span class="ne-text">卡卡部落</span><span class="ne-text">相应产品或服务内提供的为准。</span></p>
        <p id="u2c87e03c" class="ne-p"><span class="ne-text">（二）更正或补充您的个人信息</span></p>
        <p id="u715b328a" class="ne-p"><span class="ne-text">当您发现我们处理的关于您的个人信息有错误时，您有权要求我们做出更正或补充。</span></p>
        <p id="ue5544750" class="ne-p"><span class="ne-text">（三）删除您的个人信息或用户账户注销</span></p>
        <p id="ucad2028a" class="ne-p"><span class="ne-text">在以下情形中，您可以向我们提出删除个人信息或用户账户注销的请求：申请注销账号</span></p>
        <p id="u77178f48" class="ne-p"><span class="ne-text">1、如果我们处理个人信息的行为违反法律法规；</span></p>
        <p id="u0ed690f1" class="ne-p"><span class="ne-text">2、如果我们处理个人信息的行为严重违反了与您的约定；</span></p>
        <p id="u33d584af" class="ne-p"><span class="ne-text">3、如果我们永久不再为您提供产品或服务；</span></p>
        <p id="u2069465a" class="ne-p"><span class="ne-text">若我们决定响应您的删除或注销请求，我们还将同时尽可能通知从我们处获得您的个人信息的主体，要求其及时删除，除非法律法规另有规定，或这些主体获得您的独立授权。</span></p>
        <p id="u7462a08e" class="ne-p"><span class="ne-text">当您从我们的服务中删除信息后，我们可能不会立即从备份系统中删除相应的信息，但会在备份更新时删除这些信息。</span></p>
        <p id="u5bf0aa1b" class="ne-p"><span class="ne-text">（四）撤回已同意的授权</span></p>
        <p id="udb4b2dd2" class="ne-p"><span class="ne-text">当您发现我们处理的关于您的授权有错误时，您有权做出撤回已同意的授权或要求我们做出更正。</span></p>
        <p id="ue891f73c" class="ne-p"><span class="ne-text">（五）响应您的有关请求</span></p>
        <p id="u72784b66" class="ne-p"><span class="ne-text">为保障安全，在您向专属客服提出某项合法或符合双方约定的事项时（包括访问您的个人信息、更正或补充您的个人信息、删除您的个人信息、用户账户注销、撤回已同意的授权），您可能需要提供书面请求，或以其他方式证明您的身份。我们可能会先要求您验证自己的身份，然后再处理您的请求。</span></p>
        <p id="ue891f68e" class="ne-p"><span class="ne-text">我们将在</span><span class="ne-text">15个工作日内做出答复。如您不满意，还可以通过</span><span class="ne-text">卡卡部落</span><span class="ne-text">专属客服发起投诉。</span></p>
        <p id="u5a57b706" class="ne-p"><span class="ne-text">对于您合法合理且符合双方约定的请求，我们原则上不收取费用，但对多次重复、超出合法合理限度的请求，我们将视情收取一定成本费用。对于那些无端重复、需要过多技术手段（例如，需要开发新系统或从根本上改变现行惯例）、给他人合法权益带来风险或者非常不切实际的请求，我们可能会予以拒绝。</span></p>
        <p id="u625f13a0" class="ne-p"><span class="ne-text">在以下情形中，按照法律法规要求，我们将无法响应您的请求：</span></p>
        <p id="ud0e15321" class="ne-p"><span class="ne-text">1、与国家安全、国防安全有关的；</span></p>
        <p id="u0a2497ed" class="ne-p"><span class="ne-text">2、与公共安全、公共卫生、重大公共利益有关的；</span></p>
        <p id="u6d151bf2" class="ne-p"><span class="ne-text">3、与犯罪侦查、起诉、审判和执行判决等有关的；</span></p>
        <p id="uf92a5d8b" class="ne-p"><span class="ne-text">4、有充分证据表明个人信息主体存在主观恶意或滥用权利的；</span></p>
        <p id="u520900b4" class="ne-p"><span class="ne-text">5、响应您的请求将导致您或其他个人、组织的合法权益受到严重损害的；</span></p>
        <p id="ucf5a210c" class="ne-p"><span class="ne-text">6、涉及商业秘密的。</span></p>
        <p id="uccd57747" class="ne-p"><span class="ne-text">五、信息的存储</span></p>
        <p id="ue320a936" class="ne-p"><span class="ne-text">（一）存储期限</span></p>
        <p id="u4feb2afe" class="ne-p"><span class="ne-text">我们只会在达成本指引所述目的所需的期限内保留您的个人信息，除非法律有强制的留存要求，例如《中华人民共和国电子商务法》要求商品和服务信息、交易信息保存时间自交易完成之日起不少于三年。</span></p>
        <p id="u5397f013" class="ne-p"><span class="ne-text">（二）存储位置</span></p>
        <p id="ua68df110" class="ne-p"><span class="ne-text">我们在中华人民共和国境内运营中收集和产生的个人信息，将存储在中国境内。</span></p>
        <p id="u6e898f1f" class="ne-p"><span class="ne-text">（三）我们如何保护您的个人信息安全</span></p>
        <p id="u18172191" class="ne-p"><span class="ne-text">1.我们已采取符合业界标准、合理可行的安全防护措施保护您提供的个人信息安全，防止个人信息遭到未经授权访问、公开披露、使用、修改、损坏或丢失。我们会使用加密技术提高个人信息的安全性；我们会使用受信赖的保护机制防止个人信息遭到恶意攻击；我们会部署访问控制机制，尽力确保只有授权人员才可访问个人信息；以及我们会举办安全和隐私保护培训课程，加强员工对于保护个人信息重要性的认识。</span></p>
        <p id="u0d14a92e" class="ne-p"><span class="ne-text">2.我们以数据为核心，围绕数据生命周期进行的数据安全管理体系，从组织建设、制度设计、人员管理、产品技术等方面多维度提升整个系统的安全性。</span></p>
        <p id="u83db1af2" class="ne-p"><span class="ne-text">3.我们会采取合理可行的措施，尽力避免收集无关的个人信息。我们只会在达成本指引所述目的所需的期限内保留您的个人信息，除非需要延长保留期或受到法律的允许。</span></p>
        <p id="ubd1ab4d0" class="ne-p"><span class="ne-text">4.互联网并非绝对安全的环境，如您发现自己的个人信息尤其是您的账户或密码发生泄露，请您立即联络</span><span class="ne-text">卡卡部落</span><span class="ne-text">专属客服，以便我们根据您的申请采取相应措施。</span></p>
        <p id="ub228ad7f" class="ne-p"><span class="ne-text">请注意，您在使用我们服务时自愿共享甚至公开分享的信息，可能会涉及您或他人的个人信息甚至个人敏感信息。请您更加谨慎地考虑，是否在使用我们的服务时共享甚至公开分享相关信息。</span></p>
        <p id="u1633fe0f" class="ne-p"><span class="ne-text">我们将尽力保障您发送给我们的任何信息的安全性。尽最大能力避免我们的物理、技术或管理防护设施遭到破坏，导致信息被非授权访问、公开披露、篡改或毁坏。</span></p>
        <p id="u2b0dd340" class="ne-p"><span class="ne-text">5.在不幸发生个人信息安全事件后，我们将按照法律法规的要求向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。事件相关情况我们将以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，上报个人信息安全事件的处置情况。</span></p>
        <p id="ua700a4b5" class="ne-p"><span class="ne-text">六、本指引如何更新</span></p>
        <p id="uc2ec9b9c" class="ne-p"><span class="ne-text">本指引可能变更。</span></p>
        <p id="uebf77a1d" class="ne-p"><span class="ne-text">我们会在必要时修改本指引，请您理解，我们可能会适时修订本指引，并将标注本指引最近更新的日期，更新将于发布时生效。未经您明确同意，我们不会限制您按照本指引所应享有的权利。对于重大变更，我们还会提供更为显著的通知（包括但不限于对于某些服务，我们会通过</span><span class="ne-text">卡卡部落</span><span class="ne-text">公示等方式，说明本指引的具体变更内容）。请您经常回访本指引，以阅读最新版本。</span></p>
        <p id="ua05b070d" class="ne-p"><span class="ne-text">本指引所指的重大变更包括但不限于：</span></p>
        <p id="u70930ad7" class="ne-p"><span class="ne-text">1、我们的服务模式发生重大变化。如处理个人信息的目的、处理的个人信息类型、个人信息的使用方式等；</span></p>
        <p id="u2e302ad6" class="ne-p"><span class="ne-text">2、我们在所有权结构、组织架构等方面发生重大变化。如业务调整、破产并购等引起的所有者变更等；</span></p>
        <p id="u92aaf886" class="ne-p"><span class="ne-text">3、个人信息共享、转让或公开披露的主要对象发生变化；</span></p>
        <p id="u31f476cf" class="ne-p"><span class="ne-text">4、您参与个人信息处理方面的权利及其行使方式发生重大变化；</span></p>
        <p id="ua59e2af3" class="ne-p"><span class="ne-text">5、我们负责处理个人信息安全的责任部门、联络方式及投诉渠道发生变化时；</span></p>
        <p id="u0f77c451" class="ne-p"><span class="ne-text">6、个人信息安全影响评估报告表明存在高风险时。</span></p>
        <p id="u57a1b0af" class="ne-p"><span class="ne-text">七、未成年人保护</span></p>
        <p id="u4e875517" class="ne-p"><span class="ne-text">在电子商务活动中我们推定您具有相应的民事行为能力。如您为未成年人，我们要求您请您的父母或其他监护人仔细阅读本政策，并在征得您的父母或其他监护人同意的前提下使用我们的服务或向我们提供信息。</span></p>
        <p id="u514e286e" class="ne-p"><span class="ne-text">八、如何联系我们</span></p>
        <p id="u343c864c" class="ne-p"><span class="ne-text">您可以通过以下方式与我们联系，我们将在</span><span class="ne-text">15个工作日内回复您的请求：</span></p>
        <p id="u9b9a4864" class="ne-p"><span class="ne-text">1、如对本指引内容有任何疑问、意见或建议，您可通过</span><span class="ne-text">卡卡部落</span><span class="ne-text">专属客服与我们联系；</span></p>
        <p id="u8d55c28b" class="ne-p"><span class="ne-text">2、我们还设立了个人信息保护专职部门，如发现个人信息可能被泄露，您可以通过</span><span class="ne-text">卡卡部落</span><span class="ne-text">专属客服投诉举报；</span></p>
        <p id="uef324d68" class="ne-p"><span class="ne-text">3、</span><span class="ne-text">卡卡部落</span><span class="ne-text">专属客服联系方式：</span><a class="ne-link" href="mailto:kakabuluo001@163.com" target="_blank" rel="noopener" data-href="mailto:kakabuluo001@163.com"><span class="ne-text">kakabuluo01@163.com</span></a></p>
        <p id="uf510b251" class="ne-p"><span class="ne-text">附</span><span class="ne-text">1：相关定义</span></p>
        <p id="uf2182a75" class="ne-p"><span class="ne-text">卡卡部落</span><span class="ne-text">：指</span><span class="ne-text">卡卡部落</span><span class="ne-text">网站（域名为</span><span class="ne-text">www.kakabuluo.com）</span><span class="ne-text">、</span><span class="ne-text">卡卡部落</span><span class="ne-text">客户端以及随技术发展出现的提供产品和服务的新形态。</span></p>
        <p id="uae5167a2" class="ne-p"><span class="ne-text">卡卡部落</span><span class="ne-text">服务提供者：指</span><span class="ne-text">广西瀚乾信息科技有限公司</span><span class="ne-text">。</span></p>
        <p id="uf78c2732" class="ne-p"><span class="ne-text">个人信息：指以电子或者其他方式记录的能够单独或者与其他信息结合识别特定自然人身份或者反映特定自然人活动情况的各种信息。例如姓名、电子邮件地址、电话号码、银行卡号、身份证号码、住址、通讯记录等信息，或我们可以正当地通过链接找到此类信息的其他数据。</span></p>
        <p id="u66e79263" class="ne-p"><span class="ne-text">个人敏感信息：包括身份证件号码、手机号码、个人生物识别信息、支付宝账号、账户信息、行踪轨迹、交易信息、</span><span class="ne-text">14岁以下（含）儿童的个人信息等。</span></p>
        <p id="u1ca12bfa" class="ne-p"><span class="ne-text">个人信息删除：指在实现日常业务功能所涉及的系统中去除个人信息的行为，使其保持不可被检索、访问的状态。</span></p>
        <p id="u378d3aa1" class="ne-p"><span class="ne-text">Cookie：Cookie是包含字符串的小文件，会在您访问网站时发送到您的计算机上。当您再次访问网站时，Cookie使该网站可以识别您的浏览器。Cookie还能存储用户使用偏好及其他信息。您可以重置您的浏览器拒绝所有的Cookie，或者在发送Cookie时提示。但如果没有Cookie，某些网站功能或服务可能无法正常工作。</span></p>
        <p id="u5d172cd9" class="ne-p"><span class="ne-text">应用数据缓存：应用数据缓存是指设备上的一种数据存储机制。使用它有很多好处，例如，可让网络应用在未连接互联网的情况下运行，以及可通过提高内容加载速度来改善相关应用的性能。</span></p>
        <p id="u8240de09" class="ne-p"><span class="ne-text">IP地址：每台连接到互联网的计算机都指定了唯一的编号，称为互联网协议（IP）地址。由于这些编号通常都是根据国家/地区的区域指定的，因此IP地址通常可用于识别计算机连接至互联网时所在的国家/地区。</span></p>
        <p id="uecd76b4a" class="ne-p"><span class="ne-text">附</span><span class="ne-text">2：《第三方合作SDK服务列表及其隐私政策链接明细表》</span></p>
        <p id="uaa1ca0a5" class="ne-p"><span class="ne-text">为保障</span><span class="ne-text">卡卡部落</span><span class="ne-text"> APP的稳定运行或实现相关功能，我们可能会接入由第三方提供的软件开发包（SDK）实现前述目的。</span><span class="ne-text">卡卡部落</span><span class="ne-text">会进到审慎义务，对合作方获取信息的软件工具开发包（</span><span class="ne-text">SDK）进行严格的安全检测，以保护数据安全。</span></p>
        <p id="u7c6d77ee" class="ne-p"><span class="ne-text">卡卡部落</span><span class="ne-text">接入的第三方</span><span class="ne-text">SDK主要服务于您以及其他用户的需求，因此在满足新的服务需求及业务功能变更时</span><span class="ne-text">卡卡部落</span><span class="ne-text">可能会调整</span><span class="ne-text">卡卡部落</span><span class="ne-text">接入的第三方</span><span class="ne-text">SDK。</span><span class="ne-text">卡卡部落</span><span class="ne-text">会及时在本说明中向您公开说明接入第三方</span><span class="ne-text">SDK情况。目前</span><span class="ne-text">卡卡部落</span><span class="ne-text">APP接入的第三方SDK列明如下：</span></p>
        <p id="ud22161c4" class="ne-p"><span class="ne-text">SDK名称</span></p>
        <p id="ue693dc53" class="ne-p"><span class="ne-text">SDK包名</span></p>
        <p id="ue09b6ae5" class="ne-p"><span class="ne-text">SDK用途</span></p>
        <p id="u652c181f" class="ne-p"><span class="ne-text">可能获取的信息类型</span></p>
        <p id="u705b85e6" class="ne-p"><span class="ne-text">调用的设备权限</span></p>
        <p id="ua6373b87" class="ne-p"><span class="ne-text">SDK隐私政策链接</span></p>
        <p id="u440002db" class="ne-p"><span class="ne-text">个推</span></p>
        <p id="u96220c7d" class="ne-p"><span class="ne-text">com.igexin.sdk</span></p>
        <p id="uffa90e37" class="ne-p"><span class="ne-text">com.getui.gtc</span></p>
        <p id="u46c382fc" class="ne-p"><span class="ne-text">用于提供消息推送技术服务</span></p>
        <p id="u4e1fb843" class="ne-p"><span class="ne-text">设备平台、设备厂商、设备品牌、设备识别码</span></p>
        <p id="u6e7f4311" class="ne-p"><span class="ne-text">读取设备信息、网络信息以及位置相关信息</span></p>
        <p id="ub243ac65" class="ne-p"><a class="ne-link" href="http://docs.getui.com/privacy" target="_blank" rel="noopener" data-href="http://docs.getui.com/privacy"><span class="ne-text">http://docs.getui.com/privacy</span></a></p>
        <p id="u10d47550" class="ne-p"><span class="ne-text">个验一键登录</span></p>
        <p id="uc16a7a19" class="ne-p"><span class="ne-text">com.g.gysdk</span></p>
        <p id="uf96bcfc4" class="ne-p"><span class="ne-text">一键登录</span></p>
        <p id="u330b98c5" class="ne-p"><span class="ne-text">运营商信息</span></p>
        <p id="u383eaaf8" class="ne-p"><span class="ne-text">读取外置存储器、写入外置存储器</span></p>
        <p id="u86b0829f" class="ne-p"><a class="ne-link" href="https://docs.getui.com/privacy/" target="_blank" rel="noopener" data-href="https://docs.getui.com/privacy/"><span class="ne-text">https://docs.getui.com/privacy/</span></a></p>
        <p id="u41905094" class="ne-p"><span class="ne-text">微信</span></p>
        <p id="ud398922b" class="ne-p"><span class="ne-text">com.tencent.mm</span></p>
        <p id="uf877c5f6" class="ne-p"><span class="ne-text">微信支付</span></p>
        <p id="uddb90b7d" class="ne-p"><span class="ne-text">存储的个人文件</span></p>
        <p id="u82c291a1" class="ne-p"><span class="ne-text">读取外置存储器、写入外置存储器</span></p>
        <p id="u8064e889" class="ne-p"><a class="ne-link" href="https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&amp;t=weixin_agreement&amp;s=privacy" target="_blank" rel="noopener" data-href="https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&amp;t=weixin_agreement&amp;s=privacy"><span class="ne-text">https://weixin.qq.com/cgi-bin/readtemplate?lang=zh_CN&amp;t=weixin_agreement&amp;s=privacy</span></a></p>
        <p id="ub87c9fcb" class="ne-p"><span class="ne-text">阿里</span><span class="ne-text">weexSDK</span></p>
        <p id="ud263f7bb" class="ne-p"><span class="ne-text">com.taobao</span></p>
        <p id="u347f79a0" class="ne-p"><span class="ne-text">uni-app基础模块默认集成，用于渲染uniapp的nvue页面引擎</span></p>
        <p id="uba0bd1cd" class="ne-p"><span class="ne-text">存储的个人文件</span></p>
        <p id="u29ef2b17" class="ne-p"><span class="ne-text">读取外置存储器、写入外置存储器</span></p>
        <p id="u709ef2f5" class="ne-p"><a class="ne-link" href="http://doc.weex.io/zh" target="_blank" rel="noopener" data-href="http://doc.weex.io/zh"><span class="ne-text">http://doc.weex.io/zh</span></a></p>
        <p id="u69a8de22" class="ne-p"><span class="ne-text">fresco图片库</span></p>
        <p id="uc11c2c44" class="ne-p"><span class="ne-text">com.facebook.fresco</span></p>
        <p id="u8f0bfc8c" class="ne-p"><span class="ne-text">uni-app基础模块默认集成，用于nvue页面加载图片使用</span></p>
        <p id="u763e8ae1" class="ne-p"><span class="ne-text">存储的个人文件</span></p>
        <p id="u1e920aea" class="ne-p"><span class="ne-text">读取外置存储器、写入外置存储器</span></p>
        <p id="u8679a09f" class="ne-p"><a class="ne-link" href="https://www.fresco-cn.org/" target="_blank" rel="noopener" data-href="https://www.fresco-cn.org/"><span class="ne-text">https://www.fresco-cn.org/</span></a></p>
        <p id="u503d2cbd" class="ne-p"><span class="ne-text">华为</span></p>
        <p id="u6c362370" class="ne-p"><span class="ne-text">com.huawei.hms</span></p>
        <p id="u3bf35685" class="ne-p"><span class="ne-text">com.huawei.agconnect</span></p>
        <p id="u2a6f7a71" class="ne-p"><span class="ne-text">提供华为手机用户消息推送技术服务</span></p>
        <p id="u6b28d4df" class="ne-p"><span class="ne-text">设备平台、设备厂商、设备品牌、设备识别码</span></p>
        <p id="u0c059047" class="ne-p"><span class="ne-text">读取设备信息、网络信息以及位置相关信息</span></p>
        <p id="u0774995d" class="ne-p"><a class="ne-link" href="https://consumer.huawei.com/cn/privacy/privacy-policy/" target="_blank" rel="noopener" data-href="https://consumer.huawei.com/cn/privacy/privacy-policy/"><span class="ne-text">https://consumer.huawei.com/cn/privacy/privacy-policy/</span></a></p>
        <p id="u470c1dc6" class="ne-p"><span class="ne-text">x5内核</span></p>
        <p id="u4ff6eacd" class="ne-p"><span class="ne-text">com.tencent.smtt</span></p>
        <p id="u37ededd1" class="ne-p"><span class="ne-text">x5内核渲染webview</span></p>
        <p id="u3be336b0" class="ne-p"><span class="ne-text">IMEI、openid</span></p>
        <p id="uce7f5d4b" class="ne-p"><span class="ne-text">读写外置存储器、读取手机状态和身份</span></p>
        <p id="ua3368b61" class="ne-p"><a class="ne-link" href="https://x5.tencent.com/docs/privacy.html" target="_blank" rel="noopener" data-href="https://x5.tencent.com/docs/privacy.html"><span class="ne-text">https://x5.tencent.com/docs/privacy.html</span></a></p>
        <p id="uc2bb1695" class="ne-p"><span class="ne-text">支付宝</span></p>
        <p id="u02aad93c" class="ne-p"><span class="ne-text">com.alipay</span></p>
        <p id="u5bffbace" class="ne-p"><span class="ne-text">支付宝支付</span></p>
        <p id="uc0b1e53b" class="ne-p"><span class="ne-text">存储的个人文件</span></p>
        <p id="ud5b442a3" class="ne-p"><span class="ne-text">读取网络状态</span></p>
        <p id="u427f148d" class="ne-p"><a class="ne-link" href="https://render.alipay.com/p/c/k2cx0tg8" target="_blank" rel="noopener" data-href="https://render.alipay.com/p/c/k2cx0tg8"><span class="ne-text">https://render.alipay.com/p/c/k2cx0tg8</span></a></p>
        <p id="ud43dfaeb" class="ne-p"><span class="ne-text">小米</span></p>
        <p id="ubd48f95d" class="ne-p"><span class="ne-text">com.xiaomi.push</span></p>
        <p id="u205f9da2" class="ne-p"><span class="ne-text">提供小米手机用户消息推送技术服务</span></p>
        <p id="u67d26066" class="ne-p"><span class="ne-text">设备平台、设备厂商、设备品牌、设备识别码</span></p>
        <p id="ueef384bf" class="ne-p"><span class="ne-text">读取设备信息、网络信息以及位置相关信息</span></p>
        <p id="u349932a4" class="ne-p"><a class="ne-link" href="https://dev.mi.com/console/doc/detail?pId=1822" target="_blank" rel="noopener" data-href="https://dev.mi.com/console/doc/detail?pId=1822"><span class="ne-text">https://dev.mi.com/console/doc/detail?pId=1822</span></a></p>
        <p id="u2c9a9b43" class="ne-p"><span class="ne-text">vivo</span></p>
        <p id="u5a36a0d3" class="ne-p"><span class="ne-text">com.vivo</span></p>
        <p id="uf4eac64b" class="ne-p"><span class="ne-text">提供</span><span class="ne-text">vivo手机用户消息推送技术服务</span></p>
        <p id="u59d2c239" class="ne-p"><span class="ne-text">设备平台、设备厂商、设备品牌、设备识别码</span></p>
        <p id="u7874170a" class="ne-p"><span class="ne-text">读取设备信息、网络信息以及位置相关信息</span></p>
        <p id="u9d59d3ac" class="ne-p"><a class="ne-link" href="https://dev.vivo.com.cn/documentCenter/doc/366" target="_blank" rel="noopener" data-href="https://dev.vivo.com.cn/documentCenter/doc/366"><span class="ne-text">https://dev.vivo.com.cn/documentCenter/doc/366</span></a></p>

      </div>
    </view>
    <!-- 其他页面内容 -->

  </view>
</template>

<script>
import template_page_mixin from '@/libs/mixin/template_page_mixin.js'
export default {
  mixins: [template_page_mixin],
  data() {
    return {
      url: 'https://www.yuque.com/yuanxun-api/ae2vbh/privacypolicy'
    };
  }
};
</script>
<style lang="scss" scoped>

/* 胶囊*/
.tn-custom-nav-bar__back {
  width: 60%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.15);
  border-radius: 100rpx;
  border: 1rpx solid rgba(255, 255, 255, 0.5);
  color: #FFFFFF;
  font-size: 18px;

  .icon {
    display: block;
    flex: 1;
    margin: auto;
    text-align: center;
  }

}
</style>