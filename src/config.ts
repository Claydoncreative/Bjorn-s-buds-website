// Supply approved business details here before publication. No secrets belong in this file.
export const business = {
  name: 'Bjorn’s Buds', owner: 'Louise', domain: 'bjorns-buds.claydoncreative.com',
  email: '', telephone: '', whatsapp: '', // WhatsApp: international digits only, e.g. 44…
  serviceArea: 'Our local service area will be confirmed here soon. Please check availability with Louise before booking.',
  logo: '', louisePhoto: '', bjornPhoto: '',
};
export const services = [
  {title:'Group dog walks',tag:'A little pack. A big adventure.',description:'Fresh air, interesting sniffs and time outdoors with canine company. Talk to Louise about your dog’s personality and the right walking arrangement.',price:'Price on enquiry',icon:'walk'},
  {title:'Puppy & pet pop-ins',tag:'A friendly face while you’re out.',description:'A little company and a thoughtful check-in for the smaller paws in your life. Discuss feeding, toilet breaks and your pet’s routine with Louise.',price:'Price on enquiry',icon:'heart'},
  {title:'Holiday pet care',tag:'Care that feels familiar.',description:'Planning some time away? Get in touch to discuss visits and a care routine tailored around your pet and your plans.',price:'Price on enquiry',icon:'sun'},
  {title:'A little extra help',tag:'Because every pet is different.',description:'Have something else in mind? Let Louise know what your pet needs and she’ll confirm whether she can help.',price:'Price on enquiry',icon:'paw'},
];
// Illustrative stock placeholders, not photographs of clients, Louise or Bjorn.
// Unsplash licence: https://unsplash.com/license — replace with owner-approved local files.
export const photos = [
  {src:'https://images.unsplash.com/photo-1552053831-71594a27632d',alt:'Golden retriever enjoying the outdoors',label:'A golden kind of day'},
  {src:'https://images.unsplash.com/photo-1543466835-00a7907e9de1',alt:'Dog looking curiously towards the camera',label:'Always curious'},
  {src:'https://images.unsplash.com/photo-1517849845537-4d257902454a',alt:'Dog with an alert, happy expression',label:'Small paws, big personality'},
  {src:'https://images.unsplash.com/photo-1587300003388-59208cc962cb',alt:'Dog relaxing outdoors',label:'Time to take it all in'},
];
export function imageUrl(src:string,width=900){return src.startsWith('https://images.unsplash.com/') ? `${src}?auto=format&fit=crop&w=${width}&q=80` : src;}
