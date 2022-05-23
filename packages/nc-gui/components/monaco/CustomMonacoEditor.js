/* eslint-disable  */
// import assign from "nano-assign";
// import sqlAutoCompletions from "./sqlAutoCompletions";
// import {ext} from "vee-validate/dist/rules.esm";


export default {
  name: "CustomMonacoEditor",

  props: {
    value: {
      default: "",
      type: String
    },
    theme: {
      type: String,
      default: "vs-dark"
    },
    lang: {type:String, default: 'typescript'},
    readOnly:Boolean,
    minimap:Boolean,
  },

  model: {
    event: "change"
  },
  watch: {
    value(newVal) {
      if (newVal !== this.editor.getValue()) {
        if (typeof newVal === 'object') {
          this.editor.setValue(JSON.stringify(newVal, 0, 2));
        } else {
          this.editor.setValue(newVal);
        }
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      if (this.amdRequire) {
        this.amdRequire(["vs/editor/editor.main"], () => {
          this.initMonaco(window.monaco);
        });
      } else {
        // ESM format so it can't be resolved by commonjs `require` in eslint
        // eslint-disable import/no-unresolved
        const monaco = require("monaco-editor");
        // monaco.editor.defineTheme('monokai', require('./Cobalt.json'))
        // monaco.editor.setTheme('monokai')

        this.monaco = monaco;
        this.initMonaco(monaco);
      }
    });
  },
  unmounted() {

  },

  beforeDestroy() {
    this.editor && this.editor.dispose();
  },

  methods: {
    resizeLayout() {
      this.editor.layout();
    },
    initMonaco(monaco) {
      const code = this.value;
      const model = monaco.editor.createModel(code, this.lang ||"json");

      this.editor = monaco.editor.create(this.$el, {
        model: model,
        theme: this.theme,   minimap: {
          enabled: this.minimap
        }
      });

      this.editor.onDidChangeModelContent(event => {
        const value = this.editor.getValue();
        if (this.value !== value) {
          this.$emit("change", value, event);
        }
      });
      this.editor.updateOptions({ readOnly: this.readOnly })
    },

    getMonaco() {
      return this.editor;
    },
    getMonacoModule() {
      return this.monaco;
    },


  },

  render(h) {
    return h("div");
  },
  created() {
  },
  destroyed() {
  }
};
/**
 * @copyright Copyright (c) 2021, Xgene Cloud Ltd
 *
 * @author Naveen MR <oof1lab@gmail.com>
 * @author Pranav C Balan <pranavxc@gmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
