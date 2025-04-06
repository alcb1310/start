import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/add')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/posts/add"!</div>
}
