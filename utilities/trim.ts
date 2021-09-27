
function trim(str: string, symb = ' '): string {

  if (symb.length === 1) {
    const regex = new RegExp(symb, 'g');
    return str.replace(/\xA0/g, '').replace(regex, '');
  } else {
    const a = symb.split('');
    const current = a.pop();
    return trim(trim(str, current), a.join(''));
  }

}

export default trim;

// function trim(string: string, chars?: string): string {
//   if (string && !chars) {
//       return string.trim();
//   }

//   const reg = new RegExp(`[${chars}]`, "gi");
//   return string.replace(reg, "");
// }
