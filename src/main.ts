import Util from 'util'

import FS from 'fs'

const stdinStat = FS.fstatSync(0)

if (! stdinStat.isFIFO())
    console.log('Enter input:')

const stdin = FS.readFileSync(0, 'utf8')

const $ = JSON.parse(stdin)

console.log(Util.inspect(eval(process.argv[2]), false, 50, true))