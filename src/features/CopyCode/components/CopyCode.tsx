import { Button } from '@ui/Button'

export function CopyCode({ arrayTexts }: { arrayTexts: string[] }) {
  const copyToClipboard = () => {
    const partCode1 = `import json
from sentence_transformers import SentenceTransformer
from google.colab import files

model = SentenceTransformer("all-MiniLM-L6-v2")

texts = [`
    const partCode2 = `]

embeddings = model.encode(texts, show_progress_bar=True)

items = []
for i, (text, emb) in enumerate(zip(texts, embeddings)):
    items.append({
        "id": str(i),
        "text": text,
        "embedding": emb.tolist()
    })

data = {
    "items": items,
    "embedding_dim": len(items[0]["embedding"]),
    "model": "all-MiniLM-L6-v2"
}

filename = "context-atlas-embeddings.json"
with open(filename, "w", encoding="utf-8") as f:
    json.dump(data, f, ensure_ascii=False)

files.download(filename)`
    const copyFinal = partCode1 + arrayTexts.map(text => `"${text}"`) + partCode2
    navigator.clipboard.writeText(copyFinal)
  }

  return (
    <Button size="small" style={{ marginTop: '10px' }} onClick={copyToClipboard}>
      Скопировать
    </Button>
  )
}
