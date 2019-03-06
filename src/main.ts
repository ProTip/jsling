import Util from 'util'

import FS from 'fs'

const stdinStat = FS.fstatSync(0)

if (! stdinStat.isFIFO())
    console.log('Enter input:')

const stdin = FS.readFileSync(0, 'utf8')

const $ = JSON.parse(stdin)

const res = eval(process.argv[2])

if (process.stdout.isTTY)
    console.log(Util.inspect(res, false, 50, true))
else
    process.stdout.write(JSON.stringify(res))
