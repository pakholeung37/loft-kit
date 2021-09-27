import { Component, createEffect, createMemo } from 'solid-js'
import { RGB } from 'color-convert/conversions'
import { Input } from './Input'
import { NumberInput } from './NumberInput'
import { hexToRgb, hsvToRgb, isHex, hsvToHex } from './utils'

export interface InputFieldProps {
  hsv: RGB
  alpha: number
  onChange?: (rgb?: RGB, alpha?: number) => void
}

export const InputField: Component<InputFieldProps> = props => {
  const $rgb = createMemo(() => hsvToRgb(props.hsv))
  const $hex = createMemo(() => hsvToHex(props.hsv))

  let hexInput = $hex()
  let isHexFocus = false

  // Hex
  createEffect(() => {
    hexInput = $hex()
  })
  const handleHexConfirm = ({ target: { value } }) => {
    const color = value
    if (isHex(color)) {
      props.onChange && props.onChange(hexToRgb(color))
    } else {
      hexInput = $hex()
    }
  }

  const handleHexChange = ({ target }) => {
    const value = target.value
    hexInput = value
  }

  const handleHexFocus = () => {
    isHexFocus = true
  }
  const handleHexKeyPress = e => {
    e.key === 'Enter' && handleHexConfirm(e)
  }

  const handleHexBlur = e => {
    isHexFocus = false
    handleHexConfirm(e)
  }

  // R
  const handleRChange = ({ target }) => {
    const v = +target.value ?? 0
    const [r, g, b] = $rgb()
    props.onChange && props.onChange([isNaN(v) ? r : v, g, b])
  }

  // G
  const handleGChange = ({ target }) => {
    const v = +target.value ?? 0
    const [r, g, b] = $rgb()
    props.onChange && props.onChange([r, isNaN(v) ? g : v, b])
  }
  // B
  const handleBChange = ({ target }) => {
    const v = +target.value ?? 0
    const [r, g, b] = $rgb()
    props.onChange && props.onChange([r, g, isNaN(v) ? b : v])
  }
  // Alpha
  const handleAlphaChange = ({ target }) => {
    const v = +target.value ?? 0
    props.onChange && props.onChange(undefined, v)
  }

  return (
    <div className="flex w-full space-x-1">
      <div className="flex flex-col w-16 flex-shrink-0 justify-center items-center">
        <Input
          className="pl-3"
          prefix="#"
          value={isHexFocus ? hexInput : $hex()}
          onFocus={handleHexFocus}
          onChange={handleHexChange}
          onKeyPress={handleHexKeyPress}
          onBlur={handleHexBlur}
        />
        <Title>Hex</Title>
      </div>
      <div className="flex flex-col justify-center items-center">
        <NumberInput value={$rgb()[0]} onChange={handleRChange} />
        <Title>R</Title>
      </div>
      <div className="flex flex-col justify-center items-center">
        <NumberInput value={$rgb()[1]} onChange={handleGChange} />
        <Title>G</Title>
      </div>
      <div className="flex flex-col justify-center items-center">
        <NumberInput value={$rgb()[2]} onChange={handleBChange} />
        <Title>B</Title>
      </div>
      <div className="flex flex-col justify-center items-center">
        <NumberInput value={props.alpha} onChange={handleAlphaChange} />
        <Title>Alpha</Title>
      </div>
    </div>
  )
}

const Title: Component = ({ children }) => {
  return <p className="text-xs mt-1 select-none">{children}</p>
}
