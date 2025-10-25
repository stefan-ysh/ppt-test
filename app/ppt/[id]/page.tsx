import { notFound } from 'next/navigation'
import PresentationWrapper from '../../../components/PresentationWrapper'
import { presentationMap } from '../../../components/presentations/registry'

export default function PresentationPage({ params }: { params: { id: string } }) {
  if (!presentationMap[params.id]) {
    notFound()
  }

  return <PresentationWrapper presentationId={params.id} />
}

// 生成静态参数（可选，用于静态导出）
export async function generateStaticParams() {
  return Object.keys(presentationMap).map((id) => ({
    id,
  }))
}
