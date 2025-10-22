import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary'
import { FormikHelpers } from 'formik/dist/types'
import { FC, useCallback } from 'react'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'

type Props = {
  value: Date | string
  name: string
} & Pick<FormikHelpers<any>, 'setFieldValue'>
type OnChangeType = Parameters<typeof OnChangePlugin>[0]['onChange']

const theme = {
  // Theme styling goes here
  paragraph: 'editor-paragraph',
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: any) {
  console.error('Editor Error', error)
}

const Editor: FC<Props> = ({ name, setFieldValue }) => {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError: onError,
  }

  const onChange: OnChangeType = useCallback(
    (editorState) => {
      // Call toJSON on the EditorState object, which produces a serialization safe string
      const editorStateJSON = editorState.toJSON()
      // However, we still have a JavaScript object, so we need to convert it to an actual string with JSON.stringify
      setFieldValue(name, JSON.stringify(editorStateJSON))
    },
    [name, setFieldValue],
  )

  return (
    <LexicalComposer initialConfig={initialConfig}>
      {/*<ToolbarPlugin />*/}
      <div
        className={
          'block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 border border-input shadow-xs shadow-black/5 transition-[color,box-shadow] text-foreground'
        }
      >
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              aria-placeholder={'Enter lyrics here...'}
              placeholder={<div>Enter lyrics here...</div>}
              className={'text-base text-foreground focus:outline-0 focus:border-0'}
            />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <OnChangePlugin onChange={onChange} />
      </div>
    </LexicalComposer>
  )
}

export default Editor
