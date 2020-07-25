
module.exports = {
    name: 'Wichart',
    version: '1.0.0',
    description: 'Hỗ trợ tra cứu cho nhà đầu tư - by Wigroup',
    author: 'Wigroup',
    manifest_version: 2,
    icons: { '16': 'icons/16.png', '128': 'icons/128.png' },
    permissions: [
      '<all_urls>',
      '*://*/*',
      'activeTab',
      'tabs',
      'cookies',
      'background',
      'contextMenus',
      'unlimitedStorage',
      'storage',
      'notifications',
      'identity',
      'identity.email'
    ],
    browser_action: {
      default_title: 'Wichart',
      default_popup: 'pages/options.html'
    },
    background: {
      persistent: false,
      page: 'pages/background.html',
      //script: ['wi.js']
    },
    devtools_page: 'pages/devtools.html',
    options_page: 'pages/popup.html',
    content_scripts: [{
      js: [
        'js/manifest.js',
        'js/vendor.js',
        'js/content.js'
      ],
      run_at: 'document_end',
      matches: ['<all_urls>'],
      all_frames: true
    }],
    content_security_policy: "script-src 'self' 'unsafe-eval'; object-src 'self'",
    web_accessible_resources: [ 'panel.html', 'js/content.js','options.html' ]
  }
  