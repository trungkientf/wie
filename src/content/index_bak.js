wiblock = document.createElement('div');
wiblock.setAttribute("id", "wi-parent");
document.body.appendChild(wiblock);

document.querySelector('#wi-parent').innerHTML = '<div class="wichart-pop "><div class="wichart-inside"><a class="wi-a-1" href="#" target="_blank"><div class="wi-1"></div></a><a class="wi-a-2" href="javascript:void(0)" class="bt" aria-role="button"><div class="wi-2"></div></a></div></div>'

document.querySelector('#wi-parent').innerHTML += '<div class="wf-modal" aria-hidden="true" id="wi-modal"><article class="wf-dialog-modal"><header class="wf-header-modal"><h2 class="wi-tit">Biểu đồ kỹ thuật</h2><span class="close"><a href="javascript:void(0)" class="bt ptkt-close" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a></span></header><div class="wf-content-modal"><iframe id="wi-show-chart" style="border-width: 2px; border-style: solid; border-color: #cdcdcd54; border-radius: 0.25rem" width="100%" height="520px" src=""></iframe></div></article></div>'


//document.head.innerHTML +='<style>.wichart-pop {position: fixed;z-index: 99999;transform: scale(0);transform-origin: top left;} .wi-1 {background-color:#2B6CB0;padding:6px;margin: 10px; border-radius: 4px; font-size:14px;display: inline-block;height:36px} .wi-2 {background-color:#2B6CB0;padding:6px;margin: 10px 10px 10px 0; border-radius: 4px; font-size:14px;display: inline-block;height:36px} .wichart-inside{position: relative;width: 105px;z-index: 100;opacity: 0.97;box-shadow: rgb(0, 0, 0) 0px 0px 5px;border-width: 1px;border-style: solid;border-color: rgb(238, 238, 238);border-image: initial;background: rgb(255, 255, 255);border-radius: 5px;padding: 0px;} .wi-close {display:block;position:absolute; top 3px; right:10px;color: rgb(136, 136, 136);font-size: 16px;font-weight: 700;text-decoration: none;cursor: pointer;}.wichart-pop.active{transform:scale(1);transition:transform 100ms ease-in-out;}/**Modal */.wf-modal {text-align: left;}.wf-modal .tit{font-size: 20px;margin: 0;}.wf-modal .close .bt {position: absolute;right: 5px;top: 5px;background: none;padding: 5px 10px;border: 0;}.wf-modal.active{content: "";display: none;background: rgba(0, 0, 0, 0.6);position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 100000;}.wf-modal.active.active {display: block;}.wf-modal.active .wf-dialog-modal{-webkit-transform: translate(0, 0);-moz-transform: translate(0, 0);transform: translate(0, 0);top: 5%;}.wf-dialog-modal{background: #fefefe;border: 1px solid #333;border-radius: 5px;margin-left: -150px;position: fixed;left: 30%;top: 100%;z-index: 11;width: 900px;-webkit-transform: translate(0, 500%);-moz-transform: translate(0, 500%);transform: translate(0, 500%);-webkit-transition: -webkit-transform 0.3s ease-out;-moz-transition: -moz-transform 0.3s ease-out;transition: transform 0.3s ease-out;}.wf-content-modal {padding: 10px;}.wf-header-modal,.wf-footer-modal {padding: 10px;}.wf-header-modal {border-bottom: 1px solid #eee;}.wi-tit{font-size:1.875rem;margin:0.25rem 0.25rem 0.25rem 1rem}</style>';
const css = '.wichart-pop {position: fixed;z-index: 99999;transform: scale(0);transform-origin: top left;} .wi-1 {background-color:#2B6CB0;padding:6px;margin: 10px; border-radius: 4px; font-size:14px;display: inline-block;height:36px} .wi-2 {background-color:#2B6CB0;padding:6px;margin: 10px 10px 10px 0; border-radius: 4px; font-size:14px;display: inline-block;height:36px} .wichart-inside{position: relative;width: 105px;z-index: 100;opacity: 0.97;box-shadow: rgb(0, 0, 0) 0px 0px 5px;border-width: 1px;border-style: solid;border-color: rgb(238, 238, 238);border-image: initial;background: rgb(255, 255, 255);border-radius: 5px;padding: 0px;} .wi-close {display:block;position:absolute; top 3px; right:10px;color: rgb(136, 136, 136);font-size: 16px;font-weight: 700;text-decoration: none;cursor: pointer;}.wichart-pop.active{transform:scale(1);transition:transform 100ms ease-in-out;}/**Modal */.wf-modal {text-align: left;}.wf-modal .tit{font-size: 20px;margin: 0;}.wf-modal .close .bt {position: absolute;right: 5px;top: 5px;background: none;padding: 5px 10px;border: 0;}.wf-modal.active{content: "";display: none;background: rgba(0, 0, 0, 0.6);position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 100000;}.wf-modal.active.active {display: block;}.wf-modal.active .wf-dialog-modal{-webkit-transform: translate(0, 0);-moz-transform: translate(0, 0);transform: translate(0, 0);top: 5%;}.wf-dialog-modal{background: #fefefe;border: 1px solid #333;border-radius: 5px;margin-left: -150px;position: fixed;left: 30%;top: 100%;z-index: 11;width: 900px;-webkit-transform: translate(0, 500%);-moz-transform: translate(0, 500%);transform: translate(0, 500%);-webkit-transition: -webkit-transform 0.6s ease;-moz-transition: -moz-transform 0.3s ease-out;transition: transform 0.3s ease-out;}.wf-content-modal {padding: 10px;}.wf-header-modal,.wf-footer-modal {padding: 10px;}.wf-header-modal {border-bottom: 1px solid #eee;}.wi-tit{font-size:1.875rem;margin:0.25rem 0.25rem 0.25rem 1rem}'
const head = document.head || document.getElementsByTagName('head')[0]
const style = document.createElement('style');
head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}


const wia1 = document.querySelector('.wi-a-1')
const wia2 = document.querySelector('.wi-a-2')
const wi1 = document.querySelector('.wi-1')
const wi2 = document.querySelector('.wi-2')

wi1.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>'
wi2.innerHTML = '<svg viewBox="0 0 24 24" width="24" height="24" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>'

let maCK = ["AAA","AAM","ABT","ACC","ACL","ADS","AGF","AGM","AMD","ANV","APC","ASM","ASP","AST","ATG","BBC","BCE","BFC","BHN","BMC","BMP","BRC","BTP","BTT","BWE","C32","C47","CAV","CCI","CCL","CDC","CEE","CHP","CIG","CII","CLC","CLG","CLL","CLW","CMG","CMV","CMX","CNG","COM","CRC","CRE","CSM","CSV","CTD","CTF","CTI","CVT","D2D","DAG","DAH","DAT","DBC","DBD","DCL","DCM","DGW","DHA","DHC","DHG","DHM","DIC","DIG","DLG","DMC","DPG","DPM","DPR","DQC","DRC","DRH","DRL","DSN","DTA","DTL","DTT","DVP","DXG","DXV","ELC","EMC","EVE","EVG","FCM","FCN","FDC","FIR","FLC","FMC","FPT","FRT","FTM","GAS","GDT","GEX","GIL","GMC","GMD","GSP","GTA","GTN","HAG","HAH","HAI","HAP","HAR","HAS","HAX","HBC","HCD","HDC","HDG","HHS","HID","HII","HMC","HNG","HOT","HPG","HPX","HQC","HRC","HSG","HSL","HT1","HTI","HTL","HTN","HTT","HTV","HU1","HU3","HUB","HVG","HVH","HVN","HVX","IBC","IDI","IJC","ILB","IMP","ITA","ITC","ITD","JVC","KBC","KDC","KDH","KHP","KMR","KPF","KSB","L10","LAF","LBM","LCG","LCM","LDG","LEC","LGC","LGL","LHG","LIX","LM8","LMH","LSS","MCG","MCP","MDG","MHC","MSH","MSN","MWG","NAF","NAV","NBB","NCT","NKG","NLG","NNC","NSC","NT2","NTL","NVL","NVT","OPC","PAC","PAN","PC1","PDN","PDR","PET","PGC","PGD","PHC","PHR","PIT","PJT","PLP","PLX","PME","PMG","PNC","PNJ","POM","POW","PPC","PTB","PTC","PTL","PVD","PVT","PXI","PXS","PXT","QBS","QCG","RAL","RDP","REE","RIC","ROS","S4A","SAB","SAM","SAV","SBA","SBT","SBV","SC5","SCD","SCR","SCS","SFC","SFG","SFI","SGN","SGR","SGT","SHA","SHI","SHP","SII","SJD","SJF","SJS","SKG","SMA","SMB","SMC","SPM","SRC","SRF","SSC","ST8","STG","STK","SVC","SVI","SVT","SZC","SZL","TAC","TBC","TCD","TCH","TCL","TCM","TCO","TCR","TCT","TDC","TDG","TDH","TDM","TDW","TEG","TGG","THG","THI","TIP","TIX","TLD","TLG","TLH","TMP","TMS","TMT","TN1","TNA","TNC","TNI","TNT","TPC","TRA","TRC","TS4","TSC","TTB","TTE","TTF","TV2","TVT","TYA","UDC","UIC","VAF","VCF","VDP","VFG","VGC","VHC","VHM","VIC","VID","VIP","VIS","VJC","VMD","VNE","VNG","VNL","VNM","VNS","VOS","VPD","VPG","VPH","VPI","VPK","VPS","VRC","VRE","VSC","VSH","VSI","VTB","VTO","YBM","YEG","AAV","ACM","ADC","ALT","AMC","AME","AMV","APP","ARM","ATS","BAX","BBS","BCC","BDB","BED","BII","BKC","BLF","BPC","BSC","BST","BTS","BTW","BXH","C69","C92","CAG","CAN","CAP","CCM","CDN","CEO","CET","CIA","CJC","CKV","CLH","CLM","CMC","CMS","CPC","CSC","CT6","CTA","CTB","CTC","CTP","CTT","CTX","CVN","CX8","D11","DAD","DAE","DBT","DC2","DC4","DDG","DGC","DHP","DHT","DID","DIH","DL1","DNC","DNM","DNP","DNY","DP3","DPC","DPS","DS3","DST","DTD","DXP","DZM","EBS","ECI","EID","FID","GDW","GKM","GLT","GMX","HAD","HAT","HBE","HCC","HCT","HDA","HEV","HGM","HHC","HHG","HHP","HJS","HKB","HKT","HLC","HLD","HLY","HMH","HNM","HOM","HPM","HTC","HTP","HUT","HVA","HVT","ICG","IDJ","IDV","INC","INN","ITQ","KDM","KHS","KKC","KLF","KMT","KSD","KSK","KSQ","KST","KTS","KTT","KVC","L14","L18","L35","L43","L61","L62","LAS","LBE","LCD","LCS","LDP","LHC","LIG","LM7","LO5","LUT","MAC","MAS","MBG","MCC","MCF","MCO","MDC","MEC","MEL","MHL","MIM","MKV","MPT","MSC","MST","NAG","NAP","NBC","NBP","NBW","NDF","NDN","NDX","NET","NFC","NGC","NHA","NHC","NHP","NRC","NSH","NST","NTH","NTP","OCH","ONE","PBP","PCE","PCG","PCT","PDB","PDC","PEN","PGN","PGS","PGT","PHN","PHP","PIC","PJC","PLC","PMB","PMC","PMP","PMS","POT","PPE","PPP","PPS","PPY","PRC","PSC","PSD","PSE","PSW","PTD","PTS","PV2","PVB","PVC","PVE","PVG","PVL","PVS","PVX","QHD","QNC","QST","QTC","RCL","S55","S74","S99","SAF","SCI","SCL","SD2","SD4","SD5","SD6","SD9","SDA","SDC","SDG","SDN","SDT","SDU","SEB","SED","SFN","SGC","SGD","SGH","SGO","SHE","SHN","SIC","SJ1","SJC","SJE","SLS","SMN","SMT","SPI","SPP","SRA","SSM","STC","STP","SVN","TA9","TAR","TBX","TC6","TCS","TDN","TDT","TET","TFC","THB","THS","THT","TIG","TJC","TKC","TKU","TMB","TMC","TMX","TNG","TPH","TPP","TSB","TST","TTC","TTH","TTL","TTT","TTZ","TV3","TV4","TVD","TXM","UNI","V12","V21","VAT","VBC","VC1","VC2","VC3","VC6","VC7","VC9","VCC","VCG","VCM","VCR","VCS","VDL","VE1","VE2","VE3","VE4","VE8","VE9","VGP","VGS","VHE","VHL","VIE","VIT","VKC","VLA","VMC","VMI","VMS","VNC","VNF","VNT","VSA","VSM","VTC","VTH","VTJ","VTL","VTS","VTV","VXB","WCS","X20","A32","ABC","ABR","AC4","ACE","ACS","ACV","ADP","AFX","AG1","AGP","AGX","ALV","AMP","AMS","ANT","APF","APL","APT","AQN","ASA","ASD","ATA","ATB","ATD","AUM","AVC","AVF","B82","BAL","BBM","BBT","BCB","BCM","BCP","BDC","BDG","BDP","BDT","BDW","BEL","BGW","BHA","BHC","BHG","BHK","BHP","BHT","BHV","BIO","BKH","BLN","BLT","BLU","BLW","BM9","BMD","BMF","BMG","BMJ","BMN","BMV","BNW","BOT","BPW","BQB","BRR","BRS","BSA","BSD","BSG","BSH","BSL","BSP","BSQ","BSR","BT1","BT6","BTB","BTD","BTG","BTH","BTN","BTR","BTU","BTV","BUD","BVG","BVN","BWA","BWS","C12","C21","C22","C36","C4G","C71","CAD","CAT","CBI","CBS","CC1","CC4","CCH","CCP","CCR","CCT","CCV","CDG","CDH","CDO","CDP","CDR","CE1","CEC","CEG","CEN","CFC","CFV","CGV","CH5","CHC","CHS","CI5","CID","CIP","CKA","CKD","CKH","CLX","CMD","CMF","CMI","CMK","CMN","CMP","CMT","CMW","CNC","CNH","CNN","CNT","CPH","CPI","CQT","CT3","CTN","CTR","CTW","CVC","CVH","CXH","CYC","DAC","DAP","DAR","DAS","DBH","DBM","DBW","DC1","DCF","DCG","DCH","DCI","DCR","DCS","DCT","DDH","DDM","DDN","DDV","DFC","DGT","DHB","DHD","DHN","DLD","DLR","DLT","DM7","DNA","DND","DNE","DNH","DNL","DNN","DNR","DNS","DNW","DOC","DOP","DP1","DP2","DPH","DPP","DRI","DSG","DSP","DSS","DSV","DT4","DTB","DTC","DTG","DTI","DTK","DTN","DTV","DVC","DVN","DVW","DWS","DX2","DXL","EAD","EFI","EIC","EIN","EME","EMG","EMS","EPC","EPH","FBA","FBC","FCC","FCS","FDG","FGL","FHN","FHS","FIC","FOC","FOX","FRC","FRM","FSO","FT1","FTI","G20","G36","GCB","GER","GGG","GHC","GLC","GLW","GND","GSM","GTD","GTH","GTS","GTT","GVT","H11","HAB","HAF","HAM","HAN","HAV","HBD","HBH","HBW","HC3","HCI","HCS","HD2","HD8","HDM","HDO","HDP","HDW","HEC","HEJ","HEM","HEP","HES","HFB","HFC","HFS","HFX","HGW","HHN","HHR","HHV","HIG","HIZ","HJC","HKP","HLA","HLB","HLE","HLG","HLR","HLS","HMG","HMS","HNA","HNB","HND","HNF","HNI","HNP","HNR","HNT","HPB","HPD","HPH","HPI","HPP","HPT","HPU","HPW","HRB","HRT","HSI","HSM","HTE","HTG","HTK","HTM","HTR","HTU","HTW","HU4","HU6","HUG","HWS","I10","IBD","ICC","ICF","ICI","ICN","IFC","IFS","IHK","IKH","ILA","ILC","ILS","IME","IN4","IRC","ISG","ISH","IST","ITS","JOS","KAC","KCB","KCE","KDF","KGM","KHA","KHB","KHL","KHW","KIP","KSE","KSH","KSV","KTB","KTC","KTL","KTU","L12","L44","L45","L63","LAI","LAW","LBC","LCC","LCW","LDW","LG9","LIC","LKW","LLM","LM3","LMC","LMI","LQN","LTC","LTG","LWS","M10","MBN","MC3","MCH","MCI","MCT","MDA","MDF","MDN","MEF","MES","MFS","MGC","MGG","MH3","MIC","MIE","MKP","MLC","MLS","MNB","MND","MPC","MPY","MQB","MQN","MRF","MSR","MTA","MTC","MTG","MTH","MTL","MTM","MTP","MTS","MTV","MVB","MVC","MVN","MVY","NAC","NAS","NAU","NAW","NBE","NBR","NBT","NCP","NCS","ND2","NDC","NDP","NDT","NED","NHT","NHV","NLS","NMK","NNB","NNG","NNT","NOS","NQB","NQN","NQT","NS2","NS3","NSG","NSL","NSS","NTB","NTC","NTF","NTR","NTT","NTW","NUE","NVP","NWT","OIL","ONW","PAI","PBK","PBT","PCC","PCF","PCM","PCN","PDT","PDV","PEC","PEG","PEQ","PFL","PGV","PHH","PID","PIS","PIV","PJS","PKR","PLA","PMJ","PMT","PND","PNG","PNP","PNT","POB","POS","POV","PPH","PPI","PRO","PRT","PSB","PSG","PSL","PSN","PSP","PTE","PTG","PTH","PTK","PTO","PTP","PTT","PTX","PVA","PVH","PVM","PVO","PVP","PVV","PVY","PWA","PWS","PX1","PXA","PXC","PXL","PXM","PYU","QBR","QCC","QHW","QLD","QLT","QNS","QNU","QNW","QPH","QSP","QTP","RAT","RBC","RCC","RCD","RGC","RHN","RLC","RTB","RTH","RTS","S12","S27","S72","S96","SAC","SAL","SAP","SAS","SB1","SBD","SBH","SBL","SBM","SCC","SCJ","SCO","SCY","SD1","SD3","SD7","SD8","SDB","SDD","SDE","SDJ","SDK","SDP","SDV","SDX","SDY","SEA","SEP","SGP","SGS","SHC","SHG","SHX","SID","SIG","SIP","SIV","SJG","SJM","SKH","SKN","SKV","SNC","SNZ","SON","SOV","SP2","SPA","SPB","SPC","SPD","SPH","SPV","SQC","SRB","SRT","SSF","SSG","SSN","SSU","STL","STS","STT","STU","STV","STW","SUM","SVG","SVH","SVL","SWC","SZE","T12","TA3","TA6","TAG","TAP","TAW","TB8","TBD","TBT","TCJ","TCK","TCW","TDB","TDP","TDS","TEC","TEL","TGP","TH1","THN","THR","THU","THW","TID","TIE","TIS","TL4","TLI","TLP","TLT","TMG","TMW","TNB","TND","TNM","TNP","TNS","TNW","TOP","TOT","TOW","TPS","TQN","TQW","TRS","TRT","TS3","TS5","TSD","TSG","TSJ","TTD","TTG","TTJ","TTN","TTP","TTS","TTV","TUG","TV1","TVA","TVG","TVH","TVM","TVN","TVP","TVU","TVW","TW3","UCT","UDJ","UEM","UMC","UPC","UPH","USC","USD","V11","V15","VAV","VBG","VBH","VC5","VCA","VCE","VCP","VCT","VCW","VCX","VDB","VDM","VDN","VDT","VEA","VEC","VEF","VES","VET","VFC","VFR","VGG","VGI","VGL","VGR","VGT","VGV","VHD","VHF","VHG","VHH","VIH","VIM","VIN","VIR","VIW","VKD","VKP","VLB","VLC","VLF","VLG","VLP","VLW","VMA","VMG","VNA","VNB","VNH","VNI","VNP","VNX","VNY","VOC","VPA","VPC","VPR","VPW","VQC","VRG","VSE","VSG","VSN","VSP","VST","VTA","VTE","VTG","VTI","VTK","VTM","VTP","VTX","VVN","VWS","WTC","WTN","X18","XDH","XHC","XLV","XMD","XPH","YBC","YRC","YTC","WSB","HAS","IPA","FIT","KHD","OGC","PVR","SDH","VSF","VXP","X77","ADG","AGG","BXT","CAB","CAM","CCA","CPA","CPW","DFS","DNB","DRG","DUS","E12","E29","EBA","GAB","GQN","GTK","HCB","HLT","IPH","KLM","LGM","LNC","MDT","MEG","MHY","MMl","NDW","PBC","PMW","PTV","QNT","SZB","TAN","THP","UDL","VTD","VTR","XMC","ICT","CT5","HGA","DNT","NNQ","HNE","CKG","DKH","ABS","MED","STH","BCF","HGC","HSP","PLO","VW3","BBH","TDF","DXD","HKC","VXT","ACB","BAB","BID","CTG","EIB","HDB","KLB","LPB","MBB","NVB","SHB","STB","TCB","TPB","VCB","VIB","VPB","THD","BCG","PSH","CBC","DTP","HAW","HC1","HGR","KBE","MA1","PQN","SCA","TKA","VBB","VHI","X26","BVB"]

let wipop = document.querySelector('.wichart-pop')

const checkClick = (event) => {
    if(window.getSelection().toString().length === 3 && maCK.includes(window.getSelection().toString().toUpperCase()) ){
        //Thực thi code
        //console.log(true)
        wipop.classList.add('active')
        wipop.style.top = event.clientY + 10 + "px";
        wipop.style.left = event.clientX + 40 + "px";
    }
}

document.body.addEventListener('click',() => {
    wipop.classList.remove('active')
})

document.querySelector('.ptkt-close').addEventListener('click', () => {
    document.querySelector('.wf-modal').classList.remove('active')
})

document.querySelector('.wi-a-2').addEventListener('click', () => {
    document.querySelector('.wf-modal').classList.add('active')
    document.querySelector('.wi-tit').innerHTML = "Biểu đồ kỹ thuật " + window.getSelection().toString().toUpperCase()
    document.querySelector('#wi-show-chart').setAttribute('src','https://dchart.vndirect.com.vn/?language=vi&symbol='+window.getSelection().toString().toUpperCase()+'&timeframe=D')
})

document.body.addEventListener('dblclick', (event)=>{ 
    // debug click
    //console.log( window.getSelection().toString() );
    checkClick(event)
    wia1.setAttribute('href','https://wichart.vn/mychart?mack='+window.getSelection().toString())
    //wia2.setAttribute('href','https://wichart.vn/bieudophantich/'+window.getSelection().toString())
})
