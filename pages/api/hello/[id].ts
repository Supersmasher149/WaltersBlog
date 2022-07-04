export default function handler(req: any, res: any) {
  const { id } = req.query
  res.end(`Post: ${id}`)
}