export default {
  /**
   * LocalStorage 関連
   * windowを使っているのでcsr処理になるようにする必要がある
   */
  saveLocalStorage(obj: any, key: string = '') {
    if (!key) return;
    const ls = this.getLocalStorage(key);
    const save = ls ? { ...ls, ...obj } : obj;
    const stringify = JSON.stringify(save);
    window.localStorage.setItem(key, stringify);
  },
  getLocalStorage(key: string) {
    let result;
    const ls = String(window.localStorage.getItem(key))
    if (ls) result = JSON.parse(ls);
    return result;
  },
  deleteLocalStorage(key: string, key2: string | null = null) {
    if (!key) return;
    const ls = this.getLocalStorage(key)
    if (ls) {
      if (!key2) {
        window.localStorage.removeItem(key)
        console.log(`local storage [${key}] を削除しました`)
      } else {
        // 指定キー以外を一時ストック
        const stock: any = {};
        const keys = Object.keys(ls);
        for (let i = 0; i < keys.length; i += 1) {
          const k = keys[i];
          if (k !== key2) stock[k] = ls[k];
        }
        window.localStorage.removeItem(key)
        this.saveLocalStorage(stock, key)
        console.log(`local storage [${key}] の [${key2}] を削除しました`)
      }
    } else {
      console.log(`local storage [${key}] は 存在しません`)
    }
  },

  getUrls(environment: string) {
    const domain = 'akagi-venture.jp';
    // 各ブランド名
    const brands: string[] = ['hutte', 'tonton', 'zawazawa', 'bacon'];

    let result: {
      avp: string
      brand: { [key: string]: string }
    } = {
      avp: `https://${domain}`,
      brand: {
        hutte: `https://hutte.${domain}`,
        tonton: `https://tonton.${domain}`,
        zawazawa: `https://zawazawa.${domain}`,
        bacon: `https://bacon.${domain}`,
      },
    };

    // 環境の特定
    if (environment === 'develop') {
      result.avp = `https://dev.${domain}`;
      brands.forEach((brand) => {
        result.brand[brand] = `https://dev-${brand}.${domain}`
      });
    } else if (environment === 'local') {
      result.avp = '';
      brands.forEach((brand) => {
        result.brand[brand] = `/${brand}`
      });
    }

    return result;
  },

  /**
   * 【重要】
   * コンポーネントで直接使用するには
   * methodsオブジェクトに入れておく必要がある
   */
  methods: {
    /**
     * クレジットカードアイコン名
     * mastercard
     * visa
     * amex
     * jcb
     * discover
     * diners-club
     */
    getCardIconName(brand: any) {
      const lowercase = brand.toLowerCase();
      let result;
      switch (lowercase) {
        case 'american express': result = 'amex'; break;
        case 'diners club': result = 'diners-club'; break;
        default: result = lowercase; break;
      }
      return result;
    },

    /**
      * 3桁毎にカンマ割り振り
      * @param int num 元の数値
      */
    addComma(num: any, afterPoint = '', count = 0) {
      if (num !== 0 && !num) return '';
      // if (!this.isNumber(num)) return false;

      // 文字列にする
      let strNum = String(num);
      let afterDecimalPoint = afterPoint;
      if (strNum.includes('.')) {
        // 小数点以下を含む場合
        const split = strNum.split('.');
        strNum = split[0];
        afterDecimalPoint = `.${split[1]}`;
      }
      const len = Number(strNum.length);

      // 再帰的に呼び出し
      if (len > 3) {
        // 前半を引数に再帰呼び出し + 後半3桁
        strNum = `${this.addComma(strNum.substring(0, len - 3), afterDecimalPoint, count + 1)},${strNum.substring(len - 3)}`;
      }

      if (count === 0) {
        strNum += `${afterDecimalPoint}`;
      }

      return `${strNum}`;
    },
  },
}
