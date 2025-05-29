function o(n) {
      t = "",
          ['66', '72', '6f', '6d', '43', '68', '61', '72', '43', '6f', '64', '65']['forEach'](function (n) {
              t += unescape("%u00" + n)
          });
      var t, e = t;
      return String[e](n)
  }

  function v(t) {
      t = encodeURIComponent(t)["replace"](/%([0-9A-F]{2})/g, function (n, t) {
          return o("0x" + t)
      });

      return btoa(t)

  }

  function h(n, t) {
      for (var e = (n = n["split"](""))["length"], r = t["length"], a = "charCodeAt", i = 0; i < e; i++)
          n[i] = o(n[i][a](0) ^ t[(i + 10) % r][a](0));
      return n["join"]('')
  }


  function get_analysis(a) {
      // var a = [1, '2023-12-21', '2023-12-21', '2023-12-21', 'cn', '36', 4, 3];
      a = a["sort"]()["join"]('')
      a = v(a)
      r = +new Date() - 4421027 - 1661224081041
      // r = 41932436257
      a = (a += "@#" + "/indexV2/getIndexRank") + ("@#" + r) + ("@#" + 3)
      console.log(a)
      var d = "xyz517cda96efgh"
      return v(h(a, d))
  }

  aa = get_analysis(['0', '6014'])

  // console.log(aa)