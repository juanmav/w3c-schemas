var Atom_1_0_Module_Factory = function () {
  var Atom_1_0 = {
    n: 'Atom_1_0',
    dens: 'http:\/\/www.w3.org\/2005\/Atom',
    tis: [{
        ln: 'AtomPersonConstruct',
        tn: 'atomPersonConstruct',
        ps: [{
            n: 'nameOrUriOrEmail',
            col: true,
            mx: false,
            dom: false,
            etis: [{
                en: 'uri'
              }, {
                en: 'name'
              }, {
                en: 'email'
              }],
            t: 'ers'
          }]
      }, {
        ln: 'Link',
        tn: null,
        ps: [{
            n: 'href',
            an: {
              lp: 'href'
            },
            t: 'a'
          }, {
            n: 'rel',
            an: {
              lp: 'rel'
            },
            t: 'a'
          }, {
            n: 'type',
            an: {
              lp: 'type'
            },
            t: 'a'
          }, {
            n: 'hreflang',
            an: {
              lp: 'hreflang'
            },
            t: 'a'
          }, {
            n: 'title',
            an: {
              lp: 'title'
            },
            t: 'a'
          }, {
            n: 'length',
            an: {
              lp: 'length'
            },
            t: 'a'
          }]
      }],
    eis: [{
        en: 'author',
        ti: '.AtomPersonConstruct'
      }, {
        en: 'email'
      }, {
        en: 'uri'
      }, {
        en: 'link',
        ti: '.Link'
      }, {
        en: 'name'
      }]
  };
  return {
    Atom_1_0: Atom_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], Atom_1_0_Module_Factory);
}
else {
  var Atom_1_0_Module = Atom_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.Atom_1_0 = Atom_1_0_Module.Atom_1_0;
  }
  else {
    var Atom_1_0 = Atom_1_0_Module.Atom_1_0;
  }
}