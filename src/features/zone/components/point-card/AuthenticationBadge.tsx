const AuthenticationBadge = ({ method }: { method: 'QR' | 'NFC' }) => {
  switch (method) {
    case 'QR':
      return (
        <div className="w-fit bg-success-bg text-xs text-success-foreground font-semibold px-2 py-1 rounded-sm ">
          QR
        </div>
      )

    case 'NFC':
      return (
        <div className="w-fit bg-point-bg text-xs text-point-foreground font-semibold px-2 py-1 rounded-sm ">
          NFC
        </div>
      )
  }
}

export default AuthenticationBadge
