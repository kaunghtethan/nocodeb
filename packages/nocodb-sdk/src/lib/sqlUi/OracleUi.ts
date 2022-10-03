import UITypes from '../UITypes';
import { IDType } from './index';

const dbTypes = [
  'CHAR',
  'VARCHAR',
  'VARCHAR2',

  'NUMBER',
  'NCHAR',
  'NVARCHAR2',
  'CLOB',
  'NCLOB',
  'BINARY_FLOAT',
  'BINARY_DOUBLE',

  'DATE',

  'TIMESTAMP',
  'TIMESTAMP WITH LOCAL TIME ZONE',
  'TIMESTAMP WITH TIME ZONE',

  'BLOB',
  'CLOB',
  'NCLOB',
  'BFILE',

  'RAW',
  'LONG RAW',

  'ROWID',
  'UROWID',

  'XMLType',
  'UriType',
];
export class OracleUi {
  static getNewTableColumns(): any[] {
    return [
      {
        column_name: 'ID',
        title: 'Id',
        dt: 'NUMBER',
        rqd: true,
        ck: false,
        pk: true,
        un: false,
        ai: true,
        cdf: null,
        clen: null,
        np: null,
        ns: null,
        dtxp: '',
        dtxs: '',
        altered: 1,
        uidt: 'ID',
        uip: '',
        uicn: '',
      },
      {
        column_name: 'TITLE',
        title: 'Title',
        dt: 'VARCHAR2',
        nrqd: true,
        rqd: false,
        ck: false,
        pk: false,
        un: false,
        ai: false,
        cdf: null,
        clen: 45,
        np: null,
        ns: null,
        dtxp: '45',
        dtxs: '',
        altered: 1,
        uidt: 'SingleLineText',
        uip: '',
        uicn: '',
      },
      // {
      //  column_name: "created_at",
      //   dt: "timestamp",
      //   dtx: "specificType",
      //   ct: "varchar(45)",
      //   nrqd: true,
      //   rqd: false,
      //   ck: false,
      //   pk: false,
      //   un: false,
      //   ai: false,
      //   cdf: 'CURRENT_TIMESTAMP',
      //   clen: 45,
      //   np: null,
      //   ns: null,
      //   dtxp: '',
      //   dtxs: ''
      // },
      // {
      //  column_name: "updated_at",
      //   dt: "timestamp",
      //   dtx: "specificType",
      //   ct: "varchar(45)",
      //   nrqd: true,
      //   rqd: false,
      //   ck: false,
      //   pk: false,
      //   un: false,
      //   ai: false,
      //   cdf: 'CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP',
      //   clen: 45,
      //   np: null,
      //   ns: null,
      //   dtxp: '',
      //   dtxs: ''
      // }
    ];
  }

  static getNewColumn(suffix) {
    return {
      column_name: 'TITLE' + suffix,
      dt: 'VARCHAR2',
      nrqd: true,
      rqd: false,
      ck: false,
      pk: false,
      un: false,
      ai: false,
      cdf: null,
      clen: 45,
      np: null,
      ns: null,
      dtxp: '45',
      dtxs: '',
      altered: 1,
      uidt: 'SingleLineText',
      uip: '',
      uicn: '',
    };
  }

  static getDefaultLengthForDatatype(type) {
    switch (type) {
      default:
        return '';
    }
  }

  static getDefaultLengthIsDisabled(type): any {
    switch (type) {
      case 'integer':
        return true;
      case 'bfile':
      case 'binary rowid':
      case 'binary double':
      case 'binary_float':
      case 'blob':
      case 'canoical':
      case 'cfile':
      case 'char':
      case 'clob':
      case 'content pointer':
      case 'contigous array':
      case 'date':
      case 'decimal':
      case 'double precision':
      case 'float':
      case 'interval day to second':
      case 'interval year to month':
      case 'lob pointer':
      case 'long':
      case 'long raw':
      case 'named collection':
      case 'named object':
      case 'nchar':
      case 'nclob':
      case 'number':
      case 'nvarchar2':
      case 'octet':
      case 'oid':
      case 'pointer':
      case 'raw':
      case 'real':
      case 'ref':
      case 'ref cursor':
      case 'rowid':
      case 'signed binary integer':
      case 'smallint':
      case 'table':
      case 'time':
      case 'time with tz':
      case 'timestamp':
      case 'timestamp with local time zone':
      case 'timestamp with local tz':
      case 'timestamp with timezone':
      case 'timestamp with tz':
      case 'unsigned binary integer':
      case 'urowid':
      case 'varchar':
      case 'varchar2':
      case 'varray':
      case 'varying array':
        return false;
    }
  }

  static getDefaultValueForDatatype(type) {
    switch (type) {
      default:
        return '';
    }
  }

  static getDefaultScaleForDatatype(type): any {
    switch (type) {
      case 'VARCHAR2':
      case 'VARCHAR':
      case 'NVARCHAR2':
      case 'NCHAR':
        return 45;
        return ' ';
    }
  }

  static colPropAIDisabled(col, columns) {
    // console.log(col);
    if (col.dt === 'NUMBER') {
      for (let i = 0; i < columns.length; ++i) {
        if (columns[i].cn !== col.cn && columns[i].ai) {
          return true;
        }
      }
      return false;
    } else {
      return true;
    }
  }

  static colPropUNDisabled(_col) {
    // console.log(col);
    return true;
    // if (col.dt === 'int' ||
    //   col.dt === 'tinyint' ||
    //   col.dt === 'smallint' ||
    //   col.dt === 'mediumint' ||
    //   col.dt === 'bigint') {
    //   return false;
    // } else {
    //   return true;
    // }
  }

  static onCheckboxChangeAI(col) {
    console.log(col);
    if (
      col.dt === 'int' ||
      col.dt === 'bigint' ||
      col.dt === 'smallint' ||
      col.dt === 'tinyint'
    ) {
      col.altered = col.altered || 2;
    }

    // if (!col.ai) {
    //   col.dtx = 'specificType'
    // } else {
    //   col.dtx = ''
    // }
  }

  static showScale(_columnObj) {
    return false;
  }

  static removeUnsigned(columns) {
    for (let i = 0; i < columns.length; ++i) {
      if (
        columns[i].altered === 1 &&
        !(
          columns[i].dt === 'int' ||
          columns[i].dt === 'bigint' ||
          columns[i].dt === 'tinyint' ||
          columns[i].dt === 'smallint' ||
          columns[i].dt === 'mediumint'
        )
      ) {
        columns[i].un = false;
        console.log('>> resetting unsigned value', columns[i].cn);
      }
      console.log(columns[i].cn);
    }
  }

  static columnEditable(colObj) {
    return colObj.tn !== '_evolutions' || colObj.tn !== 'nc_evolutions';
  }

  static extractFunctionName(query) {
    const reg =
      /^\s*CREATE\s+(?:OR\s+REPLACE\s*)?\s*FUNCTION\s+(?:[\w\d_]+\.)?([\w_\d]+)/i;
    const match = query.match(reg);
    return match && match[1];
  }

  static extractProcedureName(query) {
    const reg =
      /^\s*CREATE\s+(?:OR\s+REPLACE\s*)?\s*PROCEDURE\s+(?:[\w\d_]+\.)?([\w_\d]+)/i;
    const match = query.match(reg);
    return match && match[1];
  }

  static splitQueries(query) {
    /***
     * we are splitting based on semicolon
     * there are mechanism to escape semicolon within single/double quotes(string)
     */
    return query.match(/\b("[^"]*;[^"]*"|'[^']*;[^']*'|[^;])*;/g);
  }

  static onCheckboxChangeAU(col) {
    console.log(col);
    // if (1) {
    col.altered = col.altered || 2;
    // }

    // if (!col.ai) {
    //   col.dtx = 'specificType'
    // } else {
    //   col.dtx = ''
    // }
  }

  /**
   * if sql statement is SELECT - it limits to a number
   * @param args
   * @returns {string|*}
   */
  sanitiseQuery(args) {
    let q = args.query.trim().split(';');

    if (q[0].startsWith('Select')) {
      q = q[0] + ` LIMIT 0,${args.limit ? args.limit : 100};`;
    } else if (q[0].startsWith('select')) {
      q = q[0] + ` LIMIT 0,${args.limit ? args.limit : 100};`;
    } else if (q[0].startsWith('SELECT')) {
      q = q[0] + ` LIMIT 0,${args.limit ? args.limit : 100};`;
    } else {
      return args.query;
    }

    return q;
  }

  getColumnsFromJson(json, tn) {
    const columns = [];

    try {
      if (typeof json === 'object' && !Array.isArray(json)) {
        const keys = Object.keys(json);

        for (let i = 0; i < keys.length; ++i) {
          switch (typeof json[keys[i]]) {
            case 'number':
              if (Number.isInteger(json[keys[i]])) {
                columns.push({
                  dp: null,
                  tn,
                  column_name: keys[i],
                  cno: keys[i],
                  dt: 'int',
                  np: 10,
                  ns: 0,
                  clen: null,
                  cop: 1,
                  pk: false,
                  nrqd: false,
                  rqd: false,
                  un: false,
                  ct: 'int(11) unsigned',
                  ai: false,
                  unique: false,
                  cdf: null,
                  cc: '',
                  csn: null,
                  dtx: 'specificType',
                  dtxp: '11',
                  dtxs: 0,
                  altered: 1,
                });
              } else {
                columns.push({
                  dp: null,
                  tn,
                  column_name: keys[i],
                  cno: keys[i],
                  dt: 'float',
                  np: 10,
                  ns: 2,
                  clen: null,
                  cop: 1,
                  pk: false,
                  nrqd: false,
                  rqd: false,
                  un: false,
                  ct: 'int(11) unsigned',
                  ai: false,
                  unique: false,
                  cdf: null,
                  cc: '',
                  csn: null,
                  dtx: 'specificType',
                  dtxp: '11',
                  dtxs: 2,
                  altered: 1,
                });
              }

              break;

            case 'string':
              if (json[keys[i]].length <= 255) {
                columns.push({
                  dp: null,
                  tn,
                  column_name: keys[i],
                  cno: keys[i],
                  dt: 'varchar',
                  np: 45,
                  ns: 0,
                  clen: null,
                  cop: 1,
                  pk: false,
                  nrqd: false,
                  rqd: false,
                  un: false,
                  ct: 'int(11) unsigned',
                  ai: false,
                  unique: false,
                  cdf: null,
                  cc: '',
                  csn: null,
                  dtx: 'specificType',
                  dtxp: '45',
                  dtxs: 0,
                  altered: 1,
                });
              } else {
                columns.push({
                  dp: null,
                  tn,
                  column_name: keys[i],
                  cno: keys[i],
                  dt: 'text',
                  np: null,
                  ns: 0,
                  clen: null,
                  cop: 1,
                  pk: false,
                  nrqd: false,
                  rqd: false,
                  un: false,
                  ct: 'int(11) unsigned',
                  ai: false,
                  unique: false,
                  cdf: null,
                  cc: '',
                  csn: null,
                  dtx: 'specificType',
                  dtxp: null,
                  dtxs: 0,
                  altered: 1,
                });
              }

              break;

            case 'boolean':
              columns.push({
                dp: null,
                tn,
                column_name: keys[i],
                cno: keys[i],
                dt: 'boolean',
                np: 3,
                ns: 0,
                clen: null,
                cop: 1,
                pk: false,
                nrqd: false,
                rqd: false,
                un: false,
                ct: 'int(11) unsigned',
                ai: false,
                unique: false,
                cdf: null,
                cc: '',
                csn: null,
                dtx: 'specificType',
                dtxp: '1',
                dtxs: 0,
                altered: 1,
              });
              break;

            case 'object':
              columns.push({
                dp: null,
                tn,
                column_name: keys[i],
                cno: keys[i],
                dt: 'json',
                np: 3,
                ns: 0,
                clen: null,
                cop: 1,
                pk: false,
                nrqd: false,
                rqd: false,
                un: false,
                ct: 'int(11) unsigned',
                ai: false,
                unique: false,
                cdf: null,
                cc: '',
                csn: null,
                dtx: 'specificType',
                dtxp: null,
                dtxs: 0,
                altered: 1,
              });
              break;

            default:
              break;
          }
        }
      }
    } catch (e) {
      console.log('Error in getColumnsFromJson', e);
    }
    return columns;
  }

  static colPropAuDisabled(_col) {
    return true;
  }

  static getAbstractType(col): any {
    switch ((col.dt || col.dt).toLowerCase()) {
      case 'integer':
        return 'integer';
      case 'bfile':
      case 'binary rowid':
      case 'binary double':
      case 'binary_float':
        return 'string';
      case 'blob':
        return 'blob';
      case 'canoical':
      case 'cfile':
      case 'char':
      case 'clob':
      case 'content pointer':
      case 'contigous array':
        return 'string';
      case 'date':
        return 'date';
      case 'decimal':
      case 'double precision':
      case 'float':
        return 'float';
      case 'interval day to second':
      case 'interval year to month':
        return 'string';
      case 'lob pointer':
        return 'string';
      case 'long':
        return 'integer';
      case 'long raw':
        return 'string';
      case 'named collection':
      case 'named object':
      case 'nchar':
      case 'nclob':
        return 'string';
      case 'nvarchar2':
      case 'octet':
      case 'oid':
      case 'pointer':
      case 'raw':
        return 'string';
      case 'real':
      case 'number':
        return 'float';
      case 'ref':
      case 'ref cursor':
      case 'rowid':
      case 'signed binary integer':
        return 'string';
      case 'smallint':
        return 'integer';
      case 'table':
        return 'string';
      case 'time':
      case 'time with tz':
        return 'time';
      case 'timestamp':
      case 'timestamp with local time zone':
      case 'timestamp with local tz':
      case 'timestamp with timezone':
      case 'timestamp with tz':
        return 'datetime';
      case 'unsigned binary integer':
      case 'urowid':
      case 'varchar':
      case 'varchar2':
        return 'string';
      case 'varray':
      case 'varying array':
        return 'string';
    }
  }

  static getUIType(col): any {
    switch (this.getAbstractType(col)) {
      case 'integer':
        return 'Number';
      case 'boolean':
        return 'Checkbox';
      case 'float':
        return 'Decimal';
      case 'date':
        return 'Date';
      case 'datetime':
        return 'CreateTime';
      case 'time':
        return 'Time';
      case 'year':
        return 'Year';
      case 'string':
        return 'SingleLineText';
      case 'text':
        return 'LongText';
      case 'blob':
        return 'Attachment';
      case 'enum':
        return 'SingleSelect';
      case 'set':
        return 'MultiSelect';
      case 'json':
        return 'LongText';
    }
  }

  static getDataTypeForUiType(col: { uidt: UITypes }, idType?: IDType) {
    const colProp: any = {};
    switch (col.uidt) {
      case 'ID':
        {
          const isAutoIncId = idType === 'AI';
          const isAutoGenId = idType === 'AG';
          colProp.dt = isAutoGenId ? 'VARCHAR2' : 'NUMBER';
          colProp.pk = true;
          colProp.un = isAutoIncId;
          colProp.ai = isAutoIncId;
          colProp.rqd = true;
          colProp.meta = isAutoGenId ? { ag: 'nc' } : undefined;
        }
        break;
      case 'ForeignKey':
        colProp.dt = 'NUMBER';
        break;
      case 'SingleLineText':
        colProp.dt = 'VARCHAR2';
        break;
      case 'LongText':
        colProp.dt = 'CLOB';
        break;
      case 'Attachment':
        colProp.dt = 'CLOB';
        break;
      case 'Checkbox':
        colProp.dt = 'NUMBER';
        colProp.dtxp = 1;
        break;
      case 'MultiSelect':
        colProp.dt = 'VARCHAR2';
        break;
      case 'SingleSelect':
        colProp.dt = 'VARCHAR2';
        break;
      case 'Collaborator':
        colProp.dt = 'VARCHAR2';
        break;
      case 'Date':
        colProp.dt = 'DATE';

        break;
      case 'Year':
        colProp.dt = 'NUMBER';
        break;
      case 'Time':
        colProp.dt = 'DATE';
        break;
      case 'PhoneNumber':
        colProp.dt = 'VARCHAR2';
        colProp.validate = {
          func: ['isMobilePhone'],
          args: [''],
          msg: ['Validation failed : isMobilePhone'],
        };
        break;
      case 'Email':
        colProp.dt = 'VARCHAR2';
        colProp.validate = {
          func: ['isEmail'],
          args: [''],
          msg: ['Validation failed : isEmail'],
        };
        break;
      case 'URL':
        colProp.dt = 'VARCHAR2';
        colProp.validate = {
          func: ['isURL'],
          args: [''],
          msg: ['Validation failed : isURL'],
        };
        break;
      case 'Number':
        colProp.dt = 'NUMBER';
        break;
      case 'Decimal':
        colProp.dt = 'NUMBER';
        break;
      case 'Currency':
        colProp.dt = 'NUMBER';
        colProp.validate = {
          func: ['isCurrency'],
          args: [''],
          msg: ['Validation failed : isCurrency'],
        };
        break;
      case 'Percent':
        colProp.dt = 'NUMBER';
        break;
      case 'Duration':
        colProp.dt = 'NUMBER';
        break;
      case 'Rating':
        colProp.dt = 'NUMBER';
        break;
      case 'Formula':
        colProp.dt = 'VARCHAR2';
        break;
      case 'Rollup':
        colProp.dt = 'VARCHAR2';
        break;
      case 'Count':
        colProp.dt = 'NUMBER';
        break;
      case 'Lookup':
        colProp.dt = 'VARCHAR2';
        break;
      case 'DateTime':
        colProp.dt = 'TIMESTAMP';
        break;
      case 'CreateTime':
        colProp.dt = 'TIMESTAMP';
        break;
      case 'LastModifiedTime':
        colProp.dt = 'TIMESTAMP';
        break;
      case 'AutoNumber':
        colProp.dt = 'NUMBER';
        break;
      case 'Barcode':
        colProp.dt = 'varchar';
        break;
      case 'Button':
        colProp.dt = 'VARCHAR2';
        break;
      default:
        colProp.dt = 'VARCHAR2';
        break;
    }
    return colProp;
  }

  // Ref - https://docs.oracle.com/cd/B28359_01/server.111/b28318/datatype.htm#CNCPT513

  static getDataTypeListForUiType(col: { uidt?: UITypes }, idType: IDType) {
    switch (col.uidt) {
      case 'ID':
        if (idType === 'AG') {
          return ['VARCHAR2', 'VARCHAR', 'NCHAR', 'NVARCHAR2'];
        } else if (idType === 'AI') {
          return ['NUMBER'];
        } else {
          return dbTypes;
        }
      case 'ForeignKey':
        return dbTypes;

      case 'SingleLineText':
      case 'LongText':
      case 'Collaborator':
        return [
          'CHAR',
          'VARCHAR',
          'VARCHAR2',
          'NCHAR',
          'NVARCHAR2',
          'CLOB',
          'NCLOB',
        ];
      case 'Attachment':
        return [
          'CHAR',
          'VARCHAR',
          'VARCHAR2',
          'NCHAR',
          'NVARCHAR2',
          'CLOB',
          'NCLOB',
        ];
      case 'JSON':
        return [
          'CHAR',
          'VARCHAR',
          'VARCHAR2',
          'NCHAR',
          'NVARCHAR2',
          'CLOB',
          'NCLOB',
        ];
      case 'Checkbox':
        return ['NUMBER'];

      case 'MultiSelect':
        return [
          'CHAR',
          'VARCHAR',
          'VARCHAR2',
          'NCHAR',
          'NVARCHAR2',
          'CLOB',
          'NCLOB',
        ];

      case 'SingleSelect':
        return [
          'CHAR',
          'VARCHAR',
          'VARCHAR2',
          'NCHAR',
          'NVARCHAR2',
          'CLOB',
          'NCLOB',
        ];

      case 'Year':
        return ['NUMBER'];

      case 'Time':
        return ['DATE', 'VARCHAR', 'VARCHAR2'];

      case 'PhoneNumber':
      case 'Email':
        return [
          'CHAR',
          'VARCHAR',
          'VARCHAR2',
          'NCHAR',
          'NVARCHAR2',
          'CLOB',
          'NCLOB',
        ];

      case 'URL':
        return [
          'CHAR',
          'VARCHAR',
          'VARCHAR2',
          'NCHAR',
          'NVARCHAR2',
          'CLOB',
          'NCLOB',
        ];

      case 'Number':
        return ['NUMBER'];

      case 'Decimal':
        return ['NUMBER'];

      case 'Currency':
        return ['NUMBER'];
      case 'Percent':
        return ['NUMBER'];

      case 'Duration':
        return ['NUMBER'];

      case 'Rating':
        return ['NUMBER'];

      case 'Count':
        return ['NUMBER'];

      case 'Date':
        return [
          'DATE',

          'TIMESTAMP',
          'TIMESTAMP WITH LOCAL TIME ZONE',
          'TIMESTAMP WITH TIME ZONE',
        ];

      case 'DateTime':
      case 'CreateTime':
      case 'LastModifiedTime':
        return [
          'DATE',

          'TIMESTAMP',
          'TIMESTAMP WITH LOCAL TIME ZONE',
          'TIMESTAMP WITH TIME ZONE',
        ];

      case 'Button':
      default:
        return dbTypes;
    }
  }

  static getUnsupportedFnList() {
    return [];
  }
}

// module.exports = PgUiHelp;
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
